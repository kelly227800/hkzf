<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to="/home">
        <template #icon>
          <span class="hkzf hkzf-fangzi"></span> </template
        >首页</van-tabbar-item
      >
      <van-tabbar-item to="/list">
        <template #icon>
          <span class="hkzf hkzf-sousuo"></span> </template
        >找房</van-tabbar-item
      >
      <van-tabbar-item to="/news">
        <template #icon>
          <span class="hkzf hkzf-zixun"></span> </template
        >资讯</van-tabbar-item
      >
      <van-tabbar-item to="/profile">
        <template #icon>
          <span class="hkzf hkzf-wode"></span> </template
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
