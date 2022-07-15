<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to="/hkzf/home">
        <template #icon>
          <van-icon name="wap-home-o" />
        </template>
        首页
      </van-tabbar-item>
      <van-tabbar-item to="/hkzf/list">
        <template #icon> <span class="hkzf hkzf-sousuo"></span> </template>
        找房
      </van-tabbar-item>
      <van-tabbar-item to="/hkzf/news">
        <template #icon> <span class="hkzf hkzf-zixun"></span> </template>
        资讯
      </van-tabbar-item>
      <van-tabbar-item to="/hkzf/profile">
        <template #icon> <span class="hkzf hkzf-wode"></span> </template>
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.hkzf {
  font-size: 42px;
}
.hkzf-sousuo {
  font-size: 44px;
}
</style>
