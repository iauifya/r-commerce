import httpInstance from '@/utils/http'

//一級麵包屑api
export function getCategoryAPI(id) {
    return httpInstance({
        url: '/category',
        params: {
            id
        }
    })
}

//二級麵包屑api
export function getCategoryFilterAPI(id) {
    return httpInstance({
        url: '/category/filter',
        params: {
            id
        }
    })
}