<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow class="navbar" @click-left="backToPrePage"/>
    <van-form @submit="login">
      <van-field
        size="large"
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" class="btn"
          >登 录</van-button
        >
      </div>
    </van-form>
    <div class="registe">
      <router-link to="/hkzf/register" class="toregiste"
        >还没有账号，去注册~</router-link
      >
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user.js'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    backToPrePage () {
      this.$router.back()
    },
    async login () {
      const res = await login(this.username, this.password)
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less">
.navbar {
  background-color: #21b97a;
  :deep(.van-nav-bar__title) {
    font-size: 37px;
    color: #fff;
  }
  :deep(.van-icon) {
    color: #fff;
  }
}
:deep(.van-cell) {
  padding: 48px 20px;
}
.btn {
  font-size: 37px;
  border: none;
  background-color: #21b97a;
}
.registe {
  text-align: center;
  .toregiste {
    color: #666;
    font-size: 30px;
  }
}
</style>
