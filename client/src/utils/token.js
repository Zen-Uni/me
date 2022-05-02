/**
 * @description token 相关的工具函数
 * @author Uni
 */

import axios from 'axios'

const site = "ME_UNI"

export const storeToken = token => {
    window.localStorage.setItem(site, token)
}

export const getToken = () => {
    return window.localStorage.getItem(site)
}

export const configReq = () => {
    const token = getToken()
    if (token) {
        axios.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${token}`
            return config
        })
        
    } 
}

export const removeToken = () => {
    return window.localStorage.removeItem(site)
}