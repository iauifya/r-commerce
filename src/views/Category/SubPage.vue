<script setup>
import GoodsItem from './components/GoodsItem.vue';
import { getCategoryFilterAPI,getSubCategoryAPI } from '@/apis/category.js';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const categoryData = ref([]);
const getCategory = async() => {
    const res = await getCategoryFilterAPI(route.params.id);
    console.log(res);
    categoryData.value = res.result;
};
onMounted(() => {
    getCategory();
});

const goodsList = ref([]);
const reqData = ref({
    categoryData: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
})
const getgoodsList = async() => {
    const res = await getSubCategoryAPI(reqData.value);
    console.log(res);
    goodsList.value = res.result.items;
};

onMounted(() => {
    getgoodsList();
});

</script>
<template>
    <div class="container">
        <div class="bread-container">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: `/category/${categoryData.parentId}` }">{{categoryData.parentName}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{categoryData.name}}</el-breadcrumb-item>
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
                <GoodsItem :good="good" v-for="good in goodsList" :key="good.id"></GoodsItem>
            </div>
        </div>
    </div>
</template>