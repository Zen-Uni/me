/**
 * @description Letter 部分路由管理
 * @author Uni
 */

const router = require('koa-router')()

const { postSelfStatus, postSelfDate, postPoolPublic } = require('../controller/letter')
const { auth } = require('../middleware/auth')

router.prefix('/letter')

router.post('/self/status', auth, postSelfStatus)
router.post('/self/date', auth, postSelfDate)
router.post('/pool/public', auth, postPoolPublic)

module.exports = router
