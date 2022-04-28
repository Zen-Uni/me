/**
 * @description 用户功能点相关 router 配置式路由
 * @author Uni
 */

const { register, login, getUser } = require('../controller/user')
const { auth } = require('../middleware/auth')

const router = require('koa-router')()

router.prefix('/user')



/** ======== get 请求 ========== */
router.get('/auth', auth, getUser)


/** ======== post 请求 ========== */

router.post('/register', register)
router.post('/login', login)



module.exports = router