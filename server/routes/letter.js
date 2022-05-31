/**
 * @description Letter 部分路由管理
 * @author Uni
 */

const router = require('koa-router')();

const { postSelfStatus, postSelfDate, postPoolPublic, postPoolArea, getPublicNum, getAreaNum, getPoolLetter, PoolReply, checkLetterReplay, getSelfList } = require('../controller/letter');
const { auth } = require('../middleware/auth');

router.prefix('/letter');

router.get('/public/num', getPublicNum);
router.get('/list/self', auth, getSelfList);

router.post('/area/num', auth, getAreaNum);
router.post('/pool', getPoolLetter);
router.post('/self/status', auth, postSelfStatus);
router.post('/self/date', auth, postSelfDate);
router.post('/pool/public', auth, postPoolPublic);
router.post('/pool/area', auth, postPoolArea);
router.post('/reply/pool', auth, PoolReply);
router.post('/reply/check', auth, checkLetterReplay);

module.exports = router;
