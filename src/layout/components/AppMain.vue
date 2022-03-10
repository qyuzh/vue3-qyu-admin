<template>
  <!-- <transition name="fade-transform" mode="out-in">
    <router-view :key="route.path" />
  </transition> -->
  <router-view v-slot="{ Component }" :key="route.path">
    <transition name="fade-transform" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="scss" scoped>
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  // transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  // transform: translateX(30px);
}
</style>
