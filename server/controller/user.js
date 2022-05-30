/**
 * @description 用户相关功能点 controller
 * @author Uni
 */
const User = require('../models/user')
const createDefaultArea = require('../utils/createDefaultArea')

const logger = require('../utils/logger')
const { ErrorModel, SuccessModel } = require('../utils/res_model')
const { createToken } = require('../utils/token')
const { stringReqT } = require('./config/paramsVerifyList')

const path = require('path')
class UserCtrl {

    // 获取用户信息
    async getUser(ctx, next) {
        const _id = ctx.state.user._id
        const user = await User.findOne({ _id }).select('+avatar_url +areaX +areaY')
        if (!user) {
            return ctx.body = new ErrorModel('权限错误')
        }
        ctx.body = new SuccessModel(user, '用户信息获取成功')
    }

    // 注册
    async register(ctx, next) {
        ctx.verifyParams({  
            username: stringReqT,
            password: stringReqT,
            email: stringReqT
        })

        const { username, email, password } = ctx.request.body
        try {
            // await new User(ctx.request.body).save()
            const check_email = await User.findOne({ email })
            console.log(check_email)
            logger({check_email})

            // 邮箱已存在
            if (check_email) {
                return ctx.body = new ErrorModel('邮箱已存在')
            }

            // 邮箱尚未注册
            const user = await new User({
                username,
                email,
                password,
                areaX: createDefaultArea(-100, 100),
                areaY: createDefaultArea(-100, 100),
                avatar_url: ''
            })
            .save()

            logger({user})

            const token = createToken(user._id, user.username)
            ctx.body = new SuccessModel({
                token
            }, "邮箱注册成功")
        } catch (err) {
            console.log(err)
        }
    }

    // 登录
    async login(ctx, next) {
        ctx.verifyParams({
            password: stringReqT,
            email: stringReqT
        })

        const user = await User.findOne(ctx.request.body).select('+avatar_url')
        logger({user}) 
        if (!user) {
            return ctx.body = new ErrorModel('登录失败，请检查账号是否正确')
        } 
        console.log(user.username)
        console.log(user._id)

        const token = createToken(user._id, user.username)
        ctx.body = new SuccessModel({
            token
        }, "登录成功")
    }

    // 头像上传
    async uploadAvatar(ctx, next) { 
        try {
            const _id = ctx.state.user._id;
            const file = ctx.request.files.file;
            const basename = path.basename(file.filepath);
            const url = `${ctx.origin}/uploads/${basename}`;
            await User.updateOne({
                _id
            }, {
                avatar_url: url
            });

            ctx.body = new SuccessModel({
                url
            }, '头像上传成功');
        } catch (err) {
            ctx.body = new ErrorModel('头像上传失败');
        }
    }
}



module.exports =  new UserCtrl()