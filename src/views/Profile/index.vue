<template>
  <div>
    <!-- <van-image fit="cover" :src="require('@/assets/imgs/my-bgc.png')" />
     -->
    <div class="bg"></div>
    <div class="box">
      <van-image round :src="require('@/assets/imgs/my-tx.png')" />
      <p v-if="isLoginPageShow">游客</p>
      <p v-else>kelly</p>
      <van-button type="primary" size="small" to="/hkzf/login" class="login" v-if="isLoginPageShow">去登录</van-button>
      <van-button type="primary" size="small" round v-else @click="isLoginPageShow=true">退出</van-button>
    </div>
    <van-grid clickable :column-num="3" :border=false>
      <van-grid-item to="/">
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
      <van-grid-item to="/">
          <span class="hkzf hkzf-wode-copy"></span>
          <p>个人资料</p>
      </van-grid-item>
      <van-grid-item to="/">
          <span class="hkzf hkzf-kefu"></span>
          <p>联系我们</p>
      </van-grid-item>
    </van-grid>
    <div class="image">
      <img src="@/assets/imgs/my-join.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoginPageShow: false
    }
  }
}
</script>

<style scoped lang="less">
.bg {
  width: 100%;
  height: 382px;
  background: url('@/assets/imgs/my-bgc.png') no-repeat;
  background-size: cover;
}
.box {
  margin: -112px auto 10px;
  width: 636px;
  height: 330px;
  background-color: #fff;
  text-align: center;
  border: 1px solid #e8e8e8;
  box-shadow: 5px 5px 10px #e8e8e8, -5px -5px 10px #e8e8e8;
  .van-image {
    margin-top: -70px;
    padding: 10px;
    width: 120px;
    height: 120px;
    background-color: #fff;
    border: 2px solid #e8e8e8;
    box-shadow: 0px 3px 3px #c1c1c1;
  }
  p {
    font-size: 26px;
  }
  .login {
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
  }
}
.image {
  margin: 0 auto;
  width: 690px;
  height: 160px;
  border-radius: 10px;
  img {
    width: 100%;
  }
}
</style>
