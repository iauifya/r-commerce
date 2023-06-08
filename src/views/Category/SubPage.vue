<script setup>
import { getCategoryFilterAPI } from '@/apis/category.js';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const categoryData = ref([]);
const route = useRoute();
const getCategory = async() => {
    const res = await getCategoryFilterAPI(route.params.id);
    console.log(res);
    categoryData.value = res.result;
};

onMounted(() => {
    getCategory();
});

</script>
<template>
    <div class="container">
        <div class="bread-container">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/' }">居家</el-breadcrumb-item>
                <el-breadcrumb-item>居家生活用品</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="sub-container">
            <el-tabs class="demo-tabs">
                <el-tab-pane label="最新商品" name="publishTime">User</el-tab-pane>
                <el-tab-pane label="最高人氣" name="orderNum">Config</el-tab-pane>
                <el-tab-pane label="評論最多" name="evaluateNum">Role</el-tab-pane>
            </el-tabs>
            <!-- 商品列表 -->
            <div class="body">

            </div>
        </div>
    </div>
</template>