<template>
  <div>
    <van-nav-bar
      title="账号登录"
      left-arrow
      class="navbar"
      @click-left="backToPrePage"
    />
    <van-form @submit="login" validate-trigger="onSubmit">
      <van-field
        validate-first="true"
        size="large"
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ validator: validator1 }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ validator: validator2 }]"
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
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    validator(val) {
      const reg = /^[\s\S]*.*[^\s][\s\S]*$/
      const flag = reg.test(val)
      if (!flag) {
        this.$toast('用户名和密码不能为空')
      }
      return flag
    },
    validator1(val) {
      const flag = this.validator(val)
      let flag1 = true
      if (flag) {
        const reg1 = /^[a-zA-Z0-9]{5,8}$/
        flag1 = reg1.test(val)
        if (!flag1) {
          this.$toast('用户格式5-8位的字母和数字')
        }
      }
      return flag && flag1
    },
    validator2(val) {
      const flag = this.validator(val)
      let flag2 = true
      if (flag) {
        const reg2 = /^[a-zA-Z0-9]{5,12}$/
        flag2 = reg2.test(val)
        if (!flag2) {
          this.$toast('密码格式5-12位的字母和数字')
        }
      }
      return flag && flag2
    },
    backToPrePage() {
      this.$router.back()
    },
    async login() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      const res = await login(this.username, this.password)
      console.log(res.data)
      if (res.data.status === 200) {
        this.$toast({
          message: '登录成功',
          icon: 'passed',
          type: 'success',
          onClose: () => {
            this.$router.push('/hkzf/profile')
          }
        })
      } else if (res.data.status === 400) {
        this.$toast(res.data.description)
      }
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
