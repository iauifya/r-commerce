import httpInstance from '@/utils/http'

//輪播api
// @param distributionSite banner投放位置（1为首页，2为分类商品页） 默认是1
export function getBannerAPI(params = {}) {
    const { distributionSite = '1' } = params
    return httpInstance({
        url: 'home/banner',
        params: {
            distributionSite
        }
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