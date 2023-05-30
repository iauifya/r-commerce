<script setup>
// import { onMounted } from 'vue';
// import { getCategoryAPI } from '@/apis/layout.js';
import { useCategoryStore } from '@/stores/category'
const categoryStore = useCategoryStore()
// const category = ref([]);
// const getCategory = async() =>{
//     const res = await getCategoryAPI();
//     category.value = res.results;
// }
// const getCategory = async() =>{
//     const res = await getCategoryAPI()
//     console.log(res)
// }
// onMounted(()=> {
//     categoryStore.getCategory();
// })
</script>

<template>
    <div>
        <!-- 我是header
        <p>{{ categoryStore.category }}</p> -->
    </div>
    <header class="app-header">
        <div class="container">
            <h1 class="logo">
                <router-link to="/">小鮮兔</router-link>
            </h1>
            <ul class="app-header-nav">
                <li class="home">
                    <router-link to="/">首頁</router-link>
                </li>
                <li class="home" v-for="item in categoryStore.category" :key="item.id">
                    <router-link to="/">{{ item.name }}</router-link>
                </li>
            </ul>
            <div class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜尋">
            </div>
        </div>
    </header>
</template>

<style scoped lang="less">
.app-header {
  background: #fff;
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url(../assets/images/logo.png) no-repeat center 18px / contain;
    }
  }
  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;
    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }
    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }
}
</style>