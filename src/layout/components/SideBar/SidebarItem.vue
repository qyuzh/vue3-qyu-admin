<template>
  <template v-if="!item.hidden">
    <el-menu-item
      v-if="isMenuItem"
      :index="item.redirect ? item.redirect : basePath"
    >
      <item-icon :icon="icon"></item-icon>
      <template #title>{{ t('route.' + title) }}</template>
    </el-menu-item>
    <el-sub-menu v-else :index="item.path" popper-append-to-body>
      <template #title>
        <item-icon :icon="icon"></item-icon>
        <span>{{ t('route.' + title) }}</span>
      </template>
      <sidebar-item
        v-for="r in routes"
        :key="r.path"
        :item="r"
        :base-path="resolvePath(r.path)"
      ></sidebar-item>
    </el-sub-menu>
  </template>
</template>

<script setup>
import { computed } from 'vue'

import path from 'path-browserify'

import ItemIcon from './ItemIcon.vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' })

const props = defineProps({
  // route object
  item: {
    type: Object,
    required: true,
  },
  basePath: {
    type: String,
    required: true,
  },
})

const isMenuItem = computed(() => {
  if (!props.item.children || props.item.children.length === 1) {
    return true
  } else {
    return false
  }
})

const routes = computed(() => props.item.children)

const title = computed(() => {
  if (props.item.meta) {
    return props.item.meta.title
  } else if (props.item.children) {
    return props.item.children[0].meta.title
  } else {
    return null
  }
})

const icon = computed(() => {
  if (props.item.meta) {
    return props.item.meta.icon
  } else if (props.item.children) {
    return props.item.children[0].meta.icon
  } else {
    return null
  }
})

function resolvePath(routePath) {
  return path.resolve(props.basePath, routePath)
}
</script>
