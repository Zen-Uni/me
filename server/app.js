const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
// const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const path = require('path')
// const index = require('./routes/index')
// const users = require('./routes/users')

// 配置式路由
const routing = require('./routes/index')

// CORS 跨域
const cors = require('koa2-cors')

// parameter 配置
const parameter = require('koa-parameter')

// 文件上传，重处理请求体
const koaBody = require('koa-body')

// 错误处理信息
const error = require('koa-json-error')

// error handler
onerror(app)


// CORS 处理
app.use(cors({
  origin: '*',
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

// 错误处理 
app.use(error({
  postFormat: (err, {
    stack,
    ...rest
  }) => process.env.NODE_ENV === 'production' ? rest : { stack, ...rest }
}))




// middlewares
// app.use(bodyparser({
//   enableTypes:['json', 'form', 'text']
// }))

app.use(koaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, '/public/uploads'),
    keepExtensions: true  
  }
}))

app.use(parameter(app))


app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
// app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())

routing(app)


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
