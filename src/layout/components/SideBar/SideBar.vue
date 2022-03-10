<template>
  <el-scrollbar>
    <el-menu
      class="el-menu-vertical"
      :collapse="isCollapse"
      :unique-opened="true"
      :default-active="activeMenu"
      router
    >
      <sidebar-item
        v-for="r in routes"
        :key="r.path"
        :item="r"
        :base-path="r.path"
      ></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'
import { computed } from 'vue'

import { useRouter, useRoute } from 'vue-router'
import useAppStore from '@/store/app'

const appStore = useAppStore()

const router = useRouter()
const route = useRoute()

const routes = computed(() => {
  return router.options.routes
})

const activeMenu = computed(() => route.path)

const isCollapse = computed(() => {
  return !appStore.sidebar.opened
})
</script>

<style lang="scss" scoped>
.el-menu {
  border: none !important;
}
</style>
