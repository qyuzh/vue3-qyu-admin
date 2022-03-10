<template>
  <el-container class="layout-container">
    <el-aside>
      <logo v-if="showLogo" :collapse="isCollapse" />
      <side-bar></side-bar>
    </el-aside>
    <el-container>
      <el-header>
        <nav-bar></nav-bar>
      </el-header>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { NavBar, SideBar, AppMain } from './components'
import logo from './components/SideBar/Logo.vue'

import { computed } from 'vue'

import useAppStore from '@/store/app'

import ResizeHook from './hooks/useResizeHandler'

const appStore = useAppStore()

const showLogo = computed(() => {
  return appStore.settings.sidebarLogo
})

const isCollapse = computed(() => {
  return !appStore.sidebar.opened
})

ResizeHook()
</script>

<style lang="scss">
.layout-container {
  height: 100%;

  .el-aside {
    display: flex;
    flex-direction: column;
    background-color: $menuBg;
    width: fit-content;
  }

  .el-header {
    padding: 0;
    height: 50px;
  }

  .logo {
    height: 60px;
    line-height: 60px;
    padding: 0 auto;
  }

  .el-menu {
    border-right: none;
    background-color: $menuBg;
  }

  .el-menu-vertical:not(.el-menu--collapse) {
    width: $sideBarWidth;
  }

  .el-main {
    padding: 0;
  }
}

.el-menu.el-menu--popup {
  background-color: $menuBg;
}

.el-sub-menu__title,
.el-menu-item {
  background-color: $menuBg;
  color: $menuText !important;
}

.el-sub-menu__title:hover,
.el-menu-item:hover {
  background-color: $menuHover !important;
}

.el-menu-item.is-active {
  color: $menuActiveText !important;
}

.el-menu--collapse .el-sub-menu.is-active .el-sub-menu__title {
  color: $menuActiveText !important;
}

.openSideBar {
  .el-aside {
    max-width: $sideBarWidth;
  }
}

.hideSideBar {
  .el-aside {
    width: 64px;
  }
}
</style>
