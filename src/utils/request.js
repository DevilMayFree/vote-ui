import axios from 'axios'

import {tansParams} from "@/utils/url"
import {showNotify} from '@nutui/nutui'


axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env.VUE_APP_BASE_API,
    // 超时
    timeout: 10000
})


// request拦截器
service.interceptors.request.use(config => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false
    // 是否需要防止数据重复提交
    const isRepeatSubmit = (config.headers || {}).repeatSubmit === false
    // get请求映射params参数
    if (config.method === 'get' && config.params) {
        let url = config.url + '?' + tansParams(config.params);
        url = url.slice(0, -1);
        config.params = {};
        config.url = url;
    }
    if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put')) {
        const requestObj = {
            url: config.url,
            data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
            time: new Date().getTime()
        }
        const requestSize = Object.keys(JSON.stringify(requestObj)).length;
        const limitSize = 5 * 1024 * 1024;
        if (requestSize >= limitSize) {
            console.warn(`[${config.url}]: ` + '請求數據大小超出允許的5M限製，無法進行防重復提交驗證。')
            return config;
        }
    }
    return config
}, error => {
    console.log('error123:',error)
    Promise.reject(error)
})


// 响应拦截器
service.interceptors.response.use(res => {
        // 未设置状态码则默认成功状态
        const code = res.data.code || 200;
        // 获取错误信息
        const msg = res.data.msg || '系統錯誤'
        // 二进制数据则直接返回
        if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
            return res.data
        } else if (code === 500) {
            showNotify.danger(msg)
            return Promise.reject(new Error(msg))
        } else if (code === 601) {
            showNotify.danger(msg)
            return Promise.reject('error')
        }else if (code !== 200) {
            // Notification.error({ title: msg })
            return Promise.reject('error')
        } else {
            return res.data
        }
    },
    error => {
        console.log('err111:' + error)
        let {message} = error;
        if (message == "Network Error") {
            message = "系統接口連接異常";
        } else if (message.includes("timeout")) {
            message = "系統接口請求超時";
        } else if (message.includes("Request failed with status code")) {
            message = "系統接口" + message.substr(message.length - 3) + "異常";
        }
        showNotify.danger(message)
        return Promise.reject(error)
    }
)

export default service
