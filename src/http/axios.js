import axios from 'axios';
import cookies from "vue-cookies";

const service = axios.create({
    timeout: 5000, // 请求超时时间
});

service.setBaseURL = function (newBaseURL) {
    this.defaults.baseURL = newBaseURL;
};

service.defaults.withCredentials = true;

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        // 比如，可以在这里设置请求头的Authorization
        // 检查是否有token
        const token = cookies.get('token');
        if (token && token !== '') {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        // 对请求错误做些什么
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        // 可以在这里根据后端的返回状态码做一些统一的处理
        return response.data;
    },
    error => {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

export default service;
