/**
 * @description 用户 Schema
 * @author Uni
 */

const { Schema, model } = require('./db')

// test version
const userSchema = new Schema({
    username: String,
    password: String
})

const User = model('users', userSchema)

module.exports = User