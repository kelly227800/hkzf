<template>
  <div>
    <!-- 已登录的头部盒子 -->
    <div class="pannel login" v-if="isLoginPageShow">
      <div class="bg login-bg"></div>
      <div class="box">
        <img :src="'http://liufusong.top:8080' + userInfo.avatar" class="tx" />
        <p>{{ userInfo.nickname }}</p>
        <van-button type="primary" size="small" round @click="logout"
          >退出</van-button
        >
        <van-cell title="编辑个人资料" to="/hkzf/info">
          <template #right-icon>
            <van-icon name="play" />
          </template>
        </van-cell>
      </div>
    </div>
    <!-- 未登录的头部盒子 -->
    <div class="pannel logout" v-else>
      <div class="bg logout-bg"></div>
      <div class="box">
        <img src="@/assets/img/my-tx.png" class="tx" />
        <p>游客</p>
        <van-button
          type="primary"
          size="small"
          to="/hkzf/login"
          class="login"
          @click="$router.push('/login')"
          >去登录</van-button
        >
      </div>
    </div>
    <!-- 公共主体 -->
    <main>
      <van-grid clickable :column-num="3" :border="false">
        <van-grid-item to="/hkzf/favorite">
          <span class="hkzf hkzf-shoucang"></span>
          <p>我的收藏</p>
        </van-grid-item>
        <van-grid-item to="/">
          <van-icon name="wap-home-o" />
          <p>我的出租</p>
        </van-grid-item>
        <van-grid-item to="/">
          <span class="hkzf hkzf-shijian"></span>
          <p>看房记录</p>
        </van-grid-item>
        <van-grid-item to="/">
          <span class="hkzf hkzf-yinhangqia-xianxing"></span>
          <p>成为房主</p>
        </van-grid-item>
        <van-grid-item to="/hkzf/info">
          <span class="hkzf hkzf-wode-copy"></span>
          <p>个人资料</p>
        </van-grid-item>
        <van-grid-item to="/">
          <span class="hkzf hkzf-kefu"></span>
          <p>联系我们</p>
        </van-grid-item>
      </van-grid>
      <div class="image">
        <img src="@/assets/img/my-join.png" class="ad" alt="" />
      </div>
    </main>
  </div>
</template>

<script>
import { getUserInfo } from '@/api'
export default {
  data() {
    return {
      userInfo: {}
    }
  },
  created() {
    this.getUserInfo()
  },
  computed: {
    isLoginPageShow() {
      return !!this.$store.state.user.token
    }
  },
  methods: {
    async getUserInfo() {
      try {
        const {
          data: { body }
        } = await getUserInfo()
        this.userInfo = body
        console.log(this.userInfo)
      } catch (err) {
        // console.log(err)
      }
    },
    logout() {
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确定退出'
        })
        .then(() => {
          this.$store.commit('setUser', {})
        })
    }
  }
}
</script>

<style scoped lang="less">
.bg {
  width: 100%;
  height: 382px;
  &.logout-bg {
    background: url('@/assets/img/my-bgc.png') no-repeat;
    background-size: cover;
  }
  &.login-bg {
    height: 592px;
    background: url('@/assets/img/avatar.png') no-repeat;
    background-size: cover;
  }
}
.box {
  position: absolute;
  top: 260px;
  left: 54px;
  margin: 0 auto;
  width: 636px;
  height: 330px;
  background-color: #fff;
  text-align: center;
  border: 1px solid #e8e8e8;
  box-shadow: 5px 5px 10px #e8e8e8, -5px -5px 10px #e8e8e8;
  img.tx {
    margin-top: -70px;
    padding: 10px;
    width: 120px;
    height: 120px;
    background-color: #fff;
    border: 2px solid #e8e8e8;
    border-radius: 50%;
    box-shadow: 0px 3px 3px #c1c1c1;
  }
  p {
    font-size: 26px;
  }
  .pannel {
    width: 138px;
    height: 60px;
    border-radius: 10px;
    font-size: 26px;
    color: #fff;
  }
}
.van-grid-item {
  p {
    font-size: 26px;
    margin-bottom: 20px;
  }
}
.image {
  margin: 0 auto;
  width: 690px;
  height: 160px;
  border-radius: 10px;
  img.ad {
    width: 100%;
  }
}
.van-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 80px;
  // background-color: pink;
  color: #999;
  font-size: 12px;
  margin: 0 auto;
  .van-icon {
    &::before {
      margin-left: -0.5rem;
    }
  }
}
.logout {
  margin-bottom: 240px;
}
.login {
  margin-bottom: 45px;
  .van-button--round {
    border-radius: 30px;
  }
  .van-button--small {
    height: 0.52rem;
    padding: 0 0.36rem;
    font-size: 0.32rem;
  }
  .van-button {
    &::before {
      width: 54px;
      height: 19.5px;
      border-radius: 30px;
      color: #fff;
      padding: 2px 15px;
      background: #21b97a;
      font-size: 12px;
    }
  }
}
</style>
