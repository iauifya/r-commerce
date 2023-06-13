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
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}

//商品詳情api
/**
 * @data{
  categoryId: 1005000,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
}
 */
export function getSubCategoryAPI(data) {
  return httpInstance({
      url: '/category/goods/temporary',
      method:'POST',
      data
  })
}