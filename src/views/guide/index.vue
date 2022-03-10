<template>
  <div class="app-container">
    <aside>
      {{ t('guide.description') }}
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank"
        >driver.js.</a
      >
    </aside>
    <el-button
      :icon="QuestionFilled"
      type="primary"
      @click.prevent.stop="guide"
    >
      {{ t('guide.button') }}
    </el-button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from './steps'
import { QuestionFilled } from '@element-plus/icons-vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' })

let driver = ref()
onMounted(() => {
  driver.value = new Driver()
})
const guide = () => {
  if (driver.value) {
    driver.value.defineSteps(steps)
    driver.value.start()
  }
}
</script>
