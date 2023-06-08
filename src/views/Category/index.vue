<script setup>
import GoodsItem from './components/GoodsItem.vue';
import { useBanner } from './composables/useBanner.js'
import { useCategory } from './composables/useCategory.js'
const { bannerList } = useBanner()
const { categoryData } = useCategory()

</script>

<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item>
        <!-- <router-link :to="`/category/${categoryData.id}`"> -->
        {{ categoryData.name }}
        <!-- </router-link> -->
      </el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 輪播圖 -->
    <div class="home-banner">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
          <img :src="item.imgUrl" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 商品分類列表 -->
    <div class="sub-list">
      <h3>全部分類</h3>
      <ul>
        <li v-for="item in categoryData.children" :key="item.id">
          <router-link :to="`/category/sub/${item.id}`">
            <img :src="item.picture" alt="">
            <p>{{ item.name }}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
      <div class="head">
        <h3>{{ item.name }}</h3>
      </div>
      <div class="body" >
        <GoodsItem :good="good" v-for="good in item.goods" :key="good.id"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  margin-top: 16px;

  img {
    width: 100%;
    height: 500px;
  }
}
.sub-list {
  margin-top: 20px;
  background-color: #fff;
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  ul {
    display: flex;
    padding: 0 32px;
    flex-wrap: wrap;
    li {
      width: 168px;
      height: 160px;
      a {
        text-align: center;
        display: block;
        font-size: 16px;
        img {
          width: 100px;
          height: 100px;
        }
        p {
          line-height: 40px;
        }
        &:hover {
          color: @xtxColor;
        }
      }
    }
  }
}
.ref-goods {
  background-color: #fff;
  margin-top: 20px;
  position: relative;
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .head {
  }
  .body {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 65px 30px;
  }
}
</style>