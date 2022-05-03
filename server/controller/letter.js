/**
 * @description 写信控制器
 * @author Uni
 */

const Letter = require("../models/letter");
const User = require("../models/user");
const { SuccessModel } = require("../utils/res_model");
const { stringReqT, stringReqF } = require("./config/paramsVerifyList")

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

        // 不加分号的话会认为后面的括号是函数调用呜呜呜呜
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


        ctx.body = new SuccessModel("信件发送成功")
    }
}


module.exports = new LetterCtrl()