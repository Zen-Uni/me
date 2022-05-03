/**
 * @description Letter 部分路由管理
 * @author Uni
 */

const router = require('koa-router')()

const { postSelfStatus, postSelfDate } = require('../controller/letter')
const { auth } = require('../middleware/auth')

router.prefix('/letter')

router.post('/self/status', auth, postSelfStatus)
router.post('/self/date', auth, postSelfDate)

module.exports = router
