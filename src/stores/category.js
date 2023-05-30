// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryAPI } from '@/apis/testAPI.js';
export const useCategoryStore = defineStore('category', () => {
    // state: () => {
    //     return { category: [] }
    // },
    // // could also be defined as
    // // state: () => ({ count: 0 })
    // actions: {
    //     async getCategory() {
    //         const res = await getCategoryAPI()
    //         console.log(res)
    //         this.category = res.result
    //     },
    // }
    const category = ref([])
    const getCategory = async() => {
        const res = await getCategoryAPI()
        category.value = res.result
    }
    return { category, getCategory }

})