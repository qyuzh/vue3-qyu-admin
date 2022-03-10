<template>
  <el-card
    class="box-card-component"
    style="margin-left: -20px; min-width: 300px"
  >
    <template #header>
      <div class="box-card-header">
        <img
          src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
        />
      </div>
    </template>

    <div style="position: relative">
      <pan-thumb :image="avatar" class="panThumb" />
      <mallki class-name="mallki-text" text="newbee's resume" />
      <div style="padding-top: 35px" class="progress-item">
        <span>JavaScript/ES6+</span>
        <el-progress :percentage="90" />
      </div>
      <div class="progress-item">
        <span>CSS3/SASS</span>
        <el-progress :percentage="90" />
      </div>
      <div class="progress-item">
        <span>HTML</span>
        <el-progress :percentage="90" />
      </div>
      <div class="progress-item">
        <span>Vue3</span>
        <el-progress :percentage="85" />
      </div>
      <div class="progress-item">
        <span>ESLint/Prettier</span>
        <el-progress :percentage="95" />
      </div>
      <div class="progress-item">
        <span>TypeScript</span>
        <el-progress :percentage="70" />
      </div>
      <div class="progress-item">
        <span>React</span>
        <el-progress :percentage="50" />
      </div>
      <div class="progress-item">
        <span>Data Structure</span>
        <el-progress :percentage="80" />
      </div>
      <div style="margin: 20px 0; position: relative">
        <div style="float: right">
          <a :href="setting.leetcode" target="_blank">
            <svg-icon icon-class="leetcode" />
          </a>
        </div>
        <div style="float: right; margin-right: 10px">
          <a :href="setting.github" target="_blank">
            <svg-icon icon-class="github" />
          </a>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import SvgIcon from '@/icons/SvgIcon.vue'
import useUserStore from '@/store/user'
import { storeToRefs } from 'pinia'
import setting from '@/settings'
const userStore = useUserStore()

const { avatar } = storeToRefs(userStore)
</script>

<script>
// import { mapGetters } from 'vuex'

import PanThumb from '@/components/PanThumb/index.vue'
import Mallki from '@/components/TextHoverEffect/Mallki.vue'

export default {
  components: { PanThumb, Mallki },

  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger',
      }
      return statusMap[status]
    },
  },
  data() {
    return {
      statisticsData: {
        article_count: 1024,
        pageviews_count: 1024,
      },
    }
  },
  // computed: {
  //   ...mapGetters(['name', 'avatar', 'roles']),
  // },
}
</script>

<style lang="scss">
.box-card-component {
  .el-card__header {
    padding: 0px !important;
  }
}
</style>
<style lang="scss" scoped>
.box-card-component {
  .box-card-header {
    position: relative;
    height: 220px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
  .mallki-text {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 20px;
    font-weight: bold;
  }
  .panThumb {
    z-index: 100;
    height: 70px !important;
    width: 70px !important;
    position: absolute !important;
    top: -45px;
    left: 0px;
    border: 5px solid #ffffff;
    background-color: #fff;
    margin: auto;
    box-shadow: none !important;
    ::v-deep .pan-info {
      box-shadow: none !important;
    }
  }
  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: 1510px) {
    .mallki-text {
      display: none;
    }
  }
}
</style>
