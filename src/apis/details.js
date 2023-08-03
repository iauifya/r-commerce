import httpInstance from '@/utils/http'

//一級麵包屑api
export const getDetail = (id)=> {
    return httpInstance({
        url: '/goods',
        params: {
            id
        }
    })
}