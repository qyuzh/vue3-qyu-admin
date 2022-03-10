<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggle-click="toggleSideBar"
    />

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu" style="padding-right: 6px">
      <screen-full id="screenfull" class="right-menu-item hover-effect" />

      <lang-select
        id="lang-select"
        class="right-menu-item hover-effect"
        style="padding-top: 15.5px"
      />

      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" />
          <el-icon class="el-icon-caret-bottom"><caret-bottom /></el-icon>
        </div>

        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> Home </el-dropdown-item>
            </router-link>
            <a target="_blank" :href="setting.leetcode">
              <el-dropdown-item>LeetCode</el-dropdown-item>
            </a>
            <a target="_blank" :href="setting.github">
              <el-dropdown-item>Github</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logoutApp">
              <span style="display: block">Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb/breadcrumb.vue'
import Hamburger from '@/components/Hamburger/index.vue'
import ScreenFull from '@/components/Screenfull/index.vue'
import LangSelect from '@/lang/LangSelect.vue'

import useUserStore from '@/store/user'
import useAppStore from '@/store/app'
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'

import setting from '@/settings'

const appStore = useAppStore()
const userStore = useUserStore()

const { sidebar } = storeToRefs(appStore)
const { avatar } = storeToRefs(userStore)

function toggleSideBar() {
  appStore.toggleSideBar()
}

const router = useRouter()
const route = useRoute()

async function logoutApp() {
  await userStore.logout()
  router.push(`/login?redirect=${route.fullPath}`)
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.05);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
