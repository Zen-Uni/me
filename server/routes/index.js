/**
 * @description 自动化配置路由
 * @author Uni
 */
 const fs = require('fs')

 module.exports = app => {
   fs.readdirSync(__dirname).forEach(file => {
     if (file === 'index.js') return 
     const router = require(`./${file}`)
     router.prefix('/api')
     app.use(router.routes()).use(router.allowedMethods())
   })
 }