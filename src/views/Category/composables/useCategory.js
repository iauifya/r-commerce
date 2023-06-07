import { getCategoryAPI } from '@/apis/category.js';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';

export function useCategory() {
    const route = useRoute();
    const categoryData = ref([]);
    // id = route.params.id~代表默認id
    const getCategory = async(id = route.params.id) => {
        const res = await getCategoryAPI(id);
        console.log(res);
        categoryData.value = res.result;
    };

    onMounted(() => {
        getCategory();
    });

    // 目標:當路由參數發生變化時，要重新發送categoryData的api
    //onBeforeRouteUpdate~守衛導航，部論當前位置何時被更新都會觸發
    onBeforeRouteUpdate((to) => {
        // 使用最新的路由參數請求最新的categoryData資料
        console.log(to);
        getCategory(to.params.id);
    });

    return {
        categoryData
    }
}