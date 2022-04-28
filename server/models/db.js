/**
 * @description Mongoose 链接 MongoDB
 * @author Uni
 */

const mongoose = require('mongoose')

const {
    DEV_DB,
    PRD_DB
} = require('../config/db')

const env = process.env.NODE_ENV

// 显示环境
console.log(env)

const path = env !== 'production' ? DEV_DB : PRD_DB
mongoose.connect(path)


module.exports = mongoose