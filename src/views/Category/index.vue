<script setup>
import { getCategoryAPI } from '@/apis/category.js';
import { getBannerAPI } from '@/apis/home.js';
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const categoryData = ref([])
const getCategory = async() =>{
  const res = await getCategoryAPI(route.params.id);
  console.log(res);
  categoryData.value = res.result;
}
const bannerList = ref([])
const getBanner = async() =>{
  const res = await getBannerAPI( {distributionSite: '2'} );
  console.log(res);
  bannerList.value = res.result;
}
onMounted(()=>{
  getCategory();
  getBanner();
})


</script>

<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }" >首頁</el-breadcrumb-item>
      <el-breadcrumb-item>
        <!-- <router-link :to="`/category/${categoryData.id}`"> -->
          {{categoryData.name}}
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
  </div>
</template>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  margin-top: 16px;
  img{
    width: 100%;
    height: 500px;
  }
}

</style>