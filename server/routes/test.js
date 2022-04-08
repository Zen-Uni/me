/**
 *  @description 测试 API 配置脚本
 * @author Uni
 */

const router = require('koa-router')()

router.prefix('/test')

router.get('/', async(ctx, next) => {
    ctx.body = "test successful"
})

module.exports = router