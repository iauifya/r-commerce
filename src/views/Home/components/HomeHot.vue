<script setup>
import HomePanel from './HomePanel.vue';
import { getHotAPI } from '@/apis/home.js';
import { ref, onMounted } from 'vue';
const hotList = ref([]);
const getHot = async () => {
  const res = await getHotAPI();
  console.log(res);
  hotList.value = res.result;
}
onMounted(() => {
  getHot();
})
</script>
<template>
  <HomePanel title="人氣推薦" subTitle="人氣爆款 不容錯過">
    <ul class="good-list">
      <li v-for="item in hotList" :key="item.id">
        <router-link to="/">
          <img :src="item.picture" alt="">
          <p class="title">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </router-link>
      </li>
    </ul>
  </HomePanel>
</template>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>