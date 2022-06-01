/**
 * @description 用户功能点相关 router 配置式路由
 * @author Uni
 */

const { register, login, getUser, uploadAvatar, getFriendList, getAllUser, changeStatus } = require('../controller/user')
const { auth } = require('../middleware/auth')

const router = require('koa-router')()

router.prefix('/user')



/** ======== get 请求 ========== */
router.get('/all', getAllUser);
router.get('/auth', auth, getUser)
router.get('/friend/list', auth, getFriendList);



/** ======== post 请求 ========== */

router.post('/register', register)
router.post('/login', login)
router.post('/avatar', auth, uploadAvatar);
router.post('/change/status', auth, changeStatus);


module.exports = router