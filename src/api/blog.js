//后台账户管理
import { Base } from './base'
import request from '@/utils/request';
//实例化基础类
let base =  new Base('blog')
//其他方法,属性
/*base.test = () => {
  console.log('test')
}*/
 base.store = (data) => {
  return request({
    url:base.url + '/store',
    method:'post',
    data
  })
}
base.list = (params = {}) => {
   return request({
     url:base.url + '/list',
     method:'get',
     params:Object.assign(Api.query,params)
   })
}
export var Api = base
