/**
 * @description 写信控制器
 * @author Uni
 */

const Letter = require("../models/letter");
const User = require("../models/user");
const { SuccessModel, ErrorModel } = require("../utils/res_model");
const { stringReqT } = require("./config/paramsVerifyList")

const LetterType = {
    self_status: 0,
    self_date: 1,
    pool_public: 2,
    pool_area: 3
}


class LetterCtrl {
    async postSelfStatus(ctx, next) {
        ctx.verifyParams({
            title: stringReqT,
            context: stringReqT
        })

        // Tip: 不加分号的话会认为后面的括号是函数调用呜呜呜呜
        const _id = ctx.state.user._id;

        (async() => {
            ctx.body = await new Promise((resolve, reject) => {
                setTimeout(async () => {
                    const letter = await new Letter({
                        ...ctx.request.body,
                        owner: _id,
                        mode: LetterType.self_status,
                        status: Math.round(Math.random())
                    })
                    .save()

                    const user = await User.findById(_id).select('+letters')
                    user.letters.push(letter._id)
                    user.save()
                    resolve(letter)
                }, 10000)
            })
        })()

        ctx.body = new SuccessModel("信件已往未来～")
    }

    async postSelfDate(ctx, next) {
        ctx.verifyParams({
            title: stringReqT,
            context: stringReqT,
            sendTo: stringReqT
        })

        const _id = ctx.state.user._id

       try {
            const letter = await new Letter({
                ...ctx.request.body,
                owner: _id,
                mode: LetterType.self_date
            })
            .save()

            const user = await User.findById(_id).select('+letters')
            user.letters.push(letter._id)
            user.save()

            ctx.body = new SuccessModel("信件已寄往未来～")
       } catch (err) {
           console.log(err)
           ctx.body = new ErrorModel("信件寄送失败，请稍后再试!")
       }
    }

    async postPoolPublic(ctx, next) {
        ctx.verifyParams({
            title: stringReqT,
            context: stringReqT
        })

        const _id = ctx.state.user._id

        try {
            (async() => {
                ctx.body = await new Promise((resolve, reject) => {
                    setTimeout(async () => {
                        const letter = await new Letter({
                            ...ctx.request.body,
                            owner: _id,
                            mode: LetterType.pool_public,
                            status: Math.round(Math.random())
                        })
                        .save()
    
                        const user = await User.findById(_id).select('+letters')
                        user.letters.push(letter._id)
                        user.save()
                        resolve(letter)
                    }, 10000)
                })
            })()

            ctx.body = new SuccessModel("信件已寄往公共信池~")
        } catch (err) {
           ctx.body = new ErrorModel("信件寄送失败，请稍后再试!")
        }
    }
}


module.exports = new LetterCtrl()