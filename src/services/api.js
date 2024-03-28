// src/services/api.js
import http from '@/http/axios';

// 根据需要动态设置baseURL
const SSO_HOST = process.env.SSO_HOST;

// 登录接口
const loginApi = (params) => {
    http.setBaseURL(SSO_HOST); // 更新baseURL
    return http.post('/v1/account/login', params); // 实际的API路径
};

// 发送邮箱验证码
const sendEmailApi = (params) => {
    http.setBaseURL(SSO_HOST);
    return http.post('/v1/account/send_emial_code', params);
};

// 注册接口
const registerApi = (params) => {
    http.setBaseURL(SSO_HOST);
    return http.post('/v1/account/register', params);
};

// 获取授权码
const createCodeApi = (params) => {
    http.setBaseURL(SSO_HOST);
    return http.post('/v1/account/create_code', params);
};

export default {
    loginApi,
    sendEmailApi,
    registerApi,
    createCodeApi
};
