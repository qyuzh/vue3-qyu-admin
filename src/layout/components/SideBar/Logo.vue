<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <router-link key="collapse" class="sidebar-logo-link" to="/">
      <img :src="logo" class="sidebar-logo" />
      <h1 class="sidebar-title">
        {{ title }}
      </h1>
    </router-link>
  </div>
</template>

<script setup>
import setting from '@/settings'
import { reactive, toRefs } from 'vue'
defineProps({
  collapse: {
    type: Boolean,
    required: true,
  },
})
const state = reactive({
  title: setting.title,
  logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png',
})
//export to page for
const { title, logo } = toRefs(state)
</script>

<style scoped lang="scss">
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  text-align: left;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;
    display: inline-flex;
    & .sidebar-logo {
      width: 32px;
      height: 32px;
      margin: auto 16px;
    }
    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
      width: 140px;
      transition: width 0.3s;
    }
  }

  &.collapse {
    .sidebar-title {
      width: 0px;
      overflow: hidden;
    }
  }
}
</style>
