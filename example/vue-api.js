import HTTP from '@pillarjs/http'
import { Message } from 'element-ui'

const http = new HTTP({
  baseURL: '/'
  // timeout: 5000
})

// http.useRequestInterceptor(request => {
  // ...
// })

http.useResponseInterceptor(response => {
  if(
    response.status == 200 ||
    response.status == 201 ||
    response.status == 304
  ) {
    return response.data
  } else {
    Message.error('系统错误，请联系管理员')
  }
})