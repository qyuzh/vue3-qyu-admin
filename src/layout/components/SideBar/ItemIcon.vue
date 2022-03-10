<template>
  <div>
    <el-icon>
      <component :is="icon.substring(8)" v-if="icon.includes('el-icon')" />
      <svg-icon v-else :icon-class="icon" style="font-size: calc(1em - 2px)" />
    </el-icon>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: '',
  },
})
</script>
