<script setup>
import { onMounted,ref } from 'vue';
import { getCategoryAPI } from '@/apis/layouts.js';

const category = ref([]);
const getCategory = async() =>{
    const res = await getCategoryAPI();
    category.value = res.results;
}
onMounted(()=> {
    getCategory();
})
</script>

<template>
    <div>
        我是header
    </div>
</template>