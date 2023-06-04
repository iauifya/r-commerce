<script setup>
import { getCategoryAPI } from '@/apis/category.js';
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const categoryData = ref([])
const getCategory = async() =>{
  const res = await getCategoryAPI(route.params.id);
  console.log(res);
  categoryData.value = res.result;
}
onMounted(()=>{
  getCategory()
})
</script>

<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item>{{categoryData.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>