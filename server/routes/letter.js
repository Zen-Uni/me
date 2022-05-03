/**
 * @description Letter 部分路由管理
 * @author Uni
 */

const router = require('koa-router')()

const { postSelfStatus } = require('../controller/letter')
const { auth } = require('../middleware/auth')

router.post('/letter/self/status', auth, postSelfStatus)

module.exports = router
