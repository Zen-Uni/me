/**
 * @description 鉴权相关的中间件
 * @author Uni
 */

const jwt = require("koa-jwt")
const { SECRET } = require("../config/secret")

// 校验 token
const auth = jwt({
    secret: SECRET
})

// 校验用户权限
const checkOwner = async (ctx, next) => {  
    if (ctx.params.id !== ctx.state.user._id) {
        ctx.throw(403, '没有权限')
    }
    await next()
}

module.exports = {
    auth,
    checkOwner  
}