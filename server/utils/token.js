/**
 * @description 创建 token
 * @author Uni
 */

const jsonwebtoken = require('jsonwebtoken')
const { SECRET } = require('../config/secret')

const createToken = (_id, username) => jsonwebtoken.sign({
    // TIP: _id 与 id 混淆问题
    _id,
    username
}, 
SECRET, 
{
    expiresIn: '1d'
}) 


module.exports = {
    createToken
}