import httpInstance from '@/utils/http'

//輪播api
export function getBannerAPI() {
    return httpInstance({
        url: 'home/banner'
    })
}

//新鮮好物api 
export function getNewAPI() {
    return httpInstance({
        url: 'home/new'
    })
}

//人氣推薦api
export function getHotAPI() {
    return httpInstance({
        url: 'home/hot'
    })
}

//商品api
export function getGoodsAPI() {
    return httpInstance({
        url: 'home/goods'
    })
}