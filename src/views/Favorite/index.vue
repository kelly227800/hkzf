<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />
    <van-card
      v-for="(item, index) in favoriteList"
      :key="index"
      :desc="item.desc"
      :title="item.title"
      :thumb="'http://liufusong.top:8080'+item.houseImg"
    >
      <template #tags>
        <van-tag plain type="danger">{{ item.tags[0] }}</van-tag>
      </template>
      <template #price>
        <span
          ><i class="money">{{ item.price }}</i> 元/月</span
        >
      </template>
    </van-card>
  </div>
</template>

<script>
import { getFavoriteList } from '@/api'
export default {
  data() {
    return {
      favoriteList: []
    }
  },
  created() {
    this.getFavoriteList()
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async getFavoriteList() {
      try {
        const {
          data: { body }
        } = await getFavoriteList()
        this.favoriteList = body
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped lang="less">
.van-card {
  border-bottom: 1px solid #e5e5e5;
}
:deep(.van-nav-bar) {
  background-color: #21b97a;
  .van-icon {
    color: #fff;
  }
  .van-nav-bar__title {
    color: #fff;
    font-size: 0.48rem;
  }
}
.van-card__thumb {
  flex: 1;
}
:deep(.van-card__content) {
  flex: 2.5;
  .van-card__title {
    font-size: 0.42rem;
    font-weight: 700;
  }
  .van-card__desc {
    margin-top: 0.15rem;
    font-size: 12px;
    color: #afb2b3;
  }
  .van-tag--plain {
    color: #39becd;
    background: #e1f5f8;
    margin-top: 4px;
    &::before {
      border: none;
    }
  }
  .van-card__price {
    font-size: 12px;
    color: #fa5741;
    .money {
      font-size: 0.5rem;
      font-style: normal;
      font-weight: 700;
    }
  }
}
</style>
