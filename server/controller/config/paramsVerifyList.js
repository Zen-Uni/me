/**
 * @description 请求体数据类型列表
 * @author Uni
 */

/** ========== base type =============== */
const stringReqT = {
    type: 'string',
    require: true
}

const stringReqF = {
    type: 'string',
    require: false
}

const numberReqT = {
    type: 'number',
    require: true
}


//用户名
// const username = {...stringReqT}

// 密码
// const password = {...stringReqT}

// 邮箱
// const email = {...stringReqT}



module.exports = {
    stringReqF,
    stringReqT,
    numberReqT
}