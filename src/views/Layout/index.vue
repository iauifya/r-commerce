<script>
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutNav from './components/LayoutNav.vue'
</script>

<template>
  <div>
    我是首頁
    <!-- 二級路由接口 -->
    <LayoutHeader/>
    <LayoutNav />
    <router-view />
    <LayoutFooter />
  </div>
</template>