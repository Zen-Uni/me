/**
 * @description Letter 部分路由管理
 * @author Uni
 */

const router = require('koa-router')();

const { postSelfStatus, postSelfDate, postPoolPublic, postPoolArea, getPublicNum, getAreaNum, getPoolLetter } = require('../controller/letter');
const { auth } = require('../middleware/auth');

router.prefix('/letter');

router.get('/public/num', getPublicNum);
router.get('/area/num', getAreaNum);


router.post('/pool', getPoolLetter);
router.post('/self/status', auth, postSelfStatus);
router.post('/self/date', auth, postSelfDate);
router.post('/pool/public', auth, postPoolPublic);
router.post('/pool/area', auth, postPoolArea);

module.exports = router;
