<script setup>
import HomePanel from './HomePanel.vue';
import { getNewAPI } from '@/apis/home.js';
import { ref, onMounted } from 'vue';
const newList = ref([]);
const getNew = async () => {
  const res = await getNewAPI();
  console.log(res);
  newList.value = res.result;
}
onMounted(() => {
  getNew();
})
</script>
<template>
  <HomePanel title="新鮮好物" subTitle="新鮮出爐 品質靠譜">
    <ul class="good-list">
      <li v-for="item in newList" :key="item.id">
        <router-link :to="`/details/${item.id}`">
          <img :src="item.picture" alt="">
          <p class="name">{{ item.name }}</p>
          <p class="price">{{ item.price }}</p>
        </router-link>
      </li>
    </ul>
  </HomePanel>
</template>

<style lang="less">
.good-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    //less mixin
    .hoverShadow();

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }

    .price {
      color: @priceColor;
    }
  }
}</style>