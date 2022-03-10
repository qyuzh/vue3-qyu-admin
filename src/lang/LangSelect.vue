<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleSetLanguage"
  >
    <!-- <div style="margin: auto"> -->
    <svg-icon class-name="international-icon" icon-class="language" />
    <!-- </div> -->
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh">
          中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en">
          English
        </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'es'" command="es">
          Español
        </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'ja'" command="ja">
          日本語
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { computed } from 'vue'
import useAppStore from '@/store/app'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const { t, locale } = useI18n({ useScope: 'global' })

const appStore = useAppStore()

const language = computed(() => {
  return appStore.language
})

function handleSetLanguage(lang) {
  locale.value = lang
  appStore.setLanguage(lang)
  ElMessage({
    message: t('messages.switch'),
    type: 'success',
  })
}
</script>

<style lang="scss" scoped></style>
