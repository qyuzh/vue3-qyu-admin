<template>
  <div class="container">
    <el-row>
      <todo-list />
    </el-row>
  </div>
</template>

<script setup>
import TodoList from './components/index.vue'
</script>

<style lang="scss" scoped>
.container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
  height: 100%;
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
