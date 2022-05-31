/**
 * @description 用户功能点相关 router 配置式路由
 * @author Uni
 */

const { register, login, getUser, uploadAvatar, getFriendList } = require('../controller/user')
const { auth } = require('../middleware/auth')

const router = require('koa-router')()

router.prefix('/user')



/** ======== get 请求 ========== */
router.get('/auth', auth, getUser)
router.get('/friend/list', auth, getFriendList);



/** ======== post 请求 ========== */

router.post('/register', register)
router.post('/login', login)
router.post('/avatar', auth, uploadAvatar);



module.exports = router