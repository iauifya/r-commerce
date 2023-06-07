<script setup>
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutNav from './components/LayoutNav.vue'

import { onMounted } from 'vue';
import { useCategoryStore } from '@/stores/category'
const categoryStore = useCategoryStore()

onMounted(()=> {
    categoryStore.getCategory();
})
</script>

<template>
  <div>
    我是首頁
    <LayoutHeader />
    <LayoutNav />
    <!-- 二級路由接口 -->
    <!-- :key="$route.fullPath"~第一種解決路由緩存的方式，但缺點是效能不好 -->
    <!-- <Router-view :key="$route.fullPath"/> -->
    <Router-view />
    <LayoutFooter />
  </div>
</template>