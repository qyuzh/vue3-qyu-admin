<template>
  <div class="login-container">
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">{{ t('login.title') }}</h3>
        <lang-select class="set-language" />
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
          <!-- <el-icon><user /></el-icon> -->
        </span>
        <el-input
          ref="usernameRef"
          v-model="loginForm.username"
          :placeholder="t('login.username')"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon><lock /></el-icon>
        </span>
        <el-input
          ref="pwdRef"
          v-model="loginForm.password"
          :type="pwdType"
          :placeholder="t('login.password')"
          name="password"
          tabindex="2"
          autocomplete="on"
          @keyup.enter="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="pwdType === 'password' ? 'eye' : 'eye-open'" />
          <!-- <el-icon :size="14"><set-up /></el-icon> -->
        </span>
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.prevent="handleLogin"
      >
        {{ t('login.logIn') }}
      </el-button>

      <div style="position: relative">
        <div class="tips">
          <span>{{ t('login.username') }} : admin</span>
          <span>{{ t('login.password') }} : 123123</span>
        </div>
        <div class="tips">
          <span style="margin-right: 18px">
            {{ t('login.username') }} : editor
          </span>
          <span>{{ t('login.password') }} : 321321</span>
        </div>
      </div>

      <div class="tips" style="text-align: right">{{ t('login.hello') }}</div>
    </el-form>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { validUsername } from '@/utils/validate'
import { useRoute, useRouter } from 'vue-router'
import useUserStore from '@/store/user'
import LangSelect from '@/lang/LangSelect.vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' })

const validateUsername = (rule, value, callback) => {
  if (!validUsername(value)) {
    callback(new Error('Please enter the correct user name'))
  } else {
    callback()
  }
}

const validatePassword = (rule, value, callback) => {
  if (value.length < 6) {
    callback(new Error('The password can not be less than 6 digits'))
  } else {
    callback()
  }
}

const loginRules = {
  username: [{ required: true, trigger: 'blur', validator: validateUsername }],
  password: [{ required: true, trigger: 'blur', validator: validatePassword }],
}

const loginForm = ref({
  username: 'admin',
  password: '123456',
})

const loginFormRef = ref(null)
const loading = ref(false)

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

function handleLogin() {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      loading.value = true
      userStore
        .login(loginForm.value)
        .then(() => {
          router.push(route.query.redirect || '/')
        })
        .catch(() => {})
        .finally(() => {
          loading.value = false
        })
    } else {
      console.log('error submit!!')
      return false
    }
  })
}

const pwdType = ref('password')
const pwdRef = ref(null)

async function showPwd() {
  if (pwdType.value === 'password') {
    pwdType.value = ''
  } else {
    pwdType.value = 'password'
  }

  await nextTick()

  pwdRef.value.focus()
}

const usernameRef = ref(null)

onMounted(() => {
  if (loginForm.value.username === '') {
    usernameRef.value.focus()
  } else if (loginForm.value.password === '') {
    pwdRef.value.focus()
  }
})
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .set-language {
    color: #fff;
    position: absolute;
    top: 3px;
    font-size: 18px;
    right: 0px;
    cursor: pointer;
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
