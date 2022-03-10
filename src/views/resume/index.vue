<template>
  <div class="container">
    <github-corner class="github-corner" />

    <el-row style="justify-content: center">
      <box-card />
    </el-row>

    <!-- <el-row :gutter="8">
      <todo-list />
    </el-row> -->
  </div>
</template>

<script setup>
import GithubCorner from '@/components/GithubCorner/index.vue'
// import TodoList from './components/TodoList/index.vue'
import BoxCard from './components/BoxCard.vue'
</script>

<style lang="scss" scoped>
.container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
  height: 100%;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
