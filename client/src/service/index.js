/**
 * @description 请求管理
 * @author Uni
 */
import axios from 'axios'



const rootUrl = 'http://localhost:8080/api'

const post = (url, data) => {
    return new Promise((resolve, reject) => {
        const req = rootUrl + url
        axios.post(req, data)
        .then(res => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err)
        })
    })
}

const get = (url) => {
    return new Promise((resolve, reject) => {
        const req = rootUrl + url
        axios.get(req)
        .then(res => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err)
        })
    })
}

// 鉴权
export const authReq = async (url = '/user/auth') => {
    return await get(url)
}

// 注册
export const registerReq = async (url, data) => {
    return await post(url, data)
}

// 登录
export const loginReq = async (url, data) => {
    return await post(url, data)
}

// 发送个人状态信件
export const postSelfStatusReq = async (data, url = '/letter/self/status') => {
    return await post(url, data)
}

// 发送个人日期信件
export const postSelfDateReq = async (data, url = '/letter/self/date') => {
    return await post(url, data)
}

// 获取公共信池的信件数量
export const getPublicLetterNum = async (url = '/letter/public/num') => {
    return await get(url)
}

// 获取区域信池的信件数量
export const getAreaLetterNum = async (url = '/letter/area/num') => {
    return await get(url)
}

// 上传头像
export const postAvatar = async (data, url = '/user/avatar') => {
    return await post(url, data)
}

// 获取信池中的信件信息
export const getPoolLetter = async (data, url = '/letter/pool') => {
    return await post(url, data);
}

// 发送公共信池信件
export const postPublicPool = async (data, url = '/letter/pool/public') => {
    return await post(url, data);
}

// 发送区域信池信件 
export const postAreaPool = async (data, url = '/letter/pool/area') => {
    return await post(url, data);
}

// 信池回信
export const postPoolReply = async (data, url = '/letter/reply/pool') => {
    return await post(url, data);
}

// 检查是否回信
export const postCheckReply = async (data, url = '/letter/reply/check') => {
    return await post(url, data);
}