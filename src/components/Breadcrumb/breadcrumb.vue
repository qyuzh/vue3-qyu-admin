<template>
  <el-breadcrumb>
    <el-breadcrumb-item to="/">{{ t('route.dashboard') }}</el-breadcrumb-item>
    <transition-group name="breadcrumb">
      <template v-for="(item, idx) in levelList" :key="item.path">
        <el-breadcrumb-item v-if="idx < levelList.length - 1" :to="item.path">
          {{ t('route.' + item.meta.title) }}
        </el-breadcrumb-item>
        <el-breadcrumb-item v-else>
          {{ t('route.' + item.meta.title) }}
        </el-breadcrumb-item>
      </template>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { reactive, onBeforeMount, watch } from 'vue'

import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' })

const route = useRoute()

let levelList = reactive([])

function getBreadcrumb() {
  levelList.splice(0, levelList.length)
  const first = route.matched[0]
  if (first.path === '/') {
    return
  } else {
    route.matched.forEach((item) => {
      if (item.children.length == 0 || item.children.length > 1) {
        levelList.push(item)
      }
    })
  }
}

onBeforeMount(getBreadcrumb)

watch(() => route.matched, getBreadcrumb)
</script>

<style lang="scss" scoped>
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all 0.5s;
}

.breadcrumb-leave-active {
  position: absolute;
}

.el-breadcrumb {
  display: inline-block;
  line-height: 50px;
}
</style>
