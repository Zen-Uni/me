/**
 * @description 写信控制器
 * @author Uni
 */

const axios = require('axios');
const BERT_API = require('../config/bert');

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
        const { context } = ctx.request.body;
        try {
            (async() => {
                const res = await new Promise((resolve, reject) => {
                    axios.post(BERT_API, {
                        sentence: context
                    })
                    .then(res => {
                        resolve(res.data)
                    })  
                })
    
                const temp = res.distribution.split(" ")
                const relativePos = temp[0],
                      relativeNav = temp[1]
                const status = relativePos >= relativeNav ? 0 : 1
                const letter = await new Letter({
                    ...ctx.request.body,
                    owner: _id,
                    mode: LetterType.self_status,
                    status,
                    relativePos,
                    relativeNav
                })
                .save()
    
                const user = await User.findById(_id).select('+letters')
                user.letters.push(letter._id)
                user.save()
            })()
    
            ctx.body = new SuccessModel("信件已往未来～")
        } catch (err) {
            console.log(err)
            ctx.body = new ErrorModel("信件寄送失败，请稍后再试!")
        }
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
        const { context } = ctx.request.body

        try {
            (async() => {
                const res = await new Promise((resolve, reject) => {
                    axios.post(BERT_API, {
                        sentence: context
                    })
                    .then(res => {
                        resolve(res.data)
                    })  
                })
                const temp = res.distribution.split(" ")
                const relativePos = temp[0],
                      relativeNav = temp[1]
                const status = relativePos >= relativeNav ? 0 : 1
                const letter = await new Letter({
                    ...ctx.request.body,
                    owner: _id,
                    mode: LetterType.pool_public,
                    status,
                    relativePos,
                    relativeNav
                })
                .save()
    
                const user = await User.findById(_id).select('+letters')
                user.letters.push(letter._id)
                user.save()
            })()

            ctx.body = new SuccessModel("信件已寄往公共信池~")
        } catch (err) {
            console.log(err)
            ctx.body = new ErrorModel("信件寄送失败，请稍后再试!")
        }
    }

    async postPoolArea(ctx, next) {
        ctx.verifyParams({
            title: stringReqT,
            context: stringReqT
        })

        const _id = ctx.state.user._id
        const { context } = ctx.request.body

        try {
            (async() => {
                const res = await new Promise((resolve, reject) => {
                    axios.post(BERT_API, {
                        sentence: context
                    })
                    .then(res => {
                        resolve(res.data)
                    })  
                })
                const temp = res.distribution.split(" ")
                const relativePos = temp[0],
                      relativeNav = temp[1]
                const status = relativePos >= relativeNav ? 0 : 1
                const letter = await new Letter({
                    ...ctx.request.body,
                    owner: _id,
                    mode: LetterType.pool_area,
                    status,
                    relativePos,
                    relativeNav
                })
                .save()
    
                const user = await User.findById(_id).select('+letters')
                user.letters.push(letter._id)
                user.save()
            })()

            ctx.body = new SuccessModel("信件已寄往区域信池~")
        } catch (err) {
           ctx.body = new ErrorModel("信件寄送失败，请稍后再试!")
        }
    }

    async getPublicNum(ctx, next) {
        try {  
            const num = await Letter.find();
            console.log('letter number ---- ', num.length);
            ctx.body = new SuccessModel({
                data: num.length
            }, '获取信件数量成功！')
        } catch (err) {
            ctx.body = new ErrorModel('哎呀，送信员偷懒去啦~')
        }
    }

    // TODO: 区域信池信件数量组件
    async getAreaNum(ctx, next) {
        try {
            
        } catch (err) {

        }
    }
}


module.exports = new LetterCtrl()