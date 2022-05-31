/**
 * @description 写信控制器
 * @author Uni
 */

const axios = require('axios');
const BERT_API = require('../config/bert');

const Letter = require("../models/letter");
const Reply = require('../models/relay');
const User = require("../models/user");
const { SuccessModel, ErrorModel } = require("../utils/res_model");
const { stringReqT } = require("./config/paramsVerifyList")

const LetterType = {
    self_status: 0,
    self_date: 1,
    pool_public: 2,
    pool_area: 3
};

const PoolLetterType = {
    public: 'public',
    area: 'area'
};

const LetterMode = {
    pos: 'positive',
    neg: 'negative',
    wander: 'wander'
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
            const num = await Letter.find({
                mode: LetterType.pool_public
            });
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

    // 获取信池中的信件信息
    async getPoolLetter(ctx, next) {
        ctx.verifyParams({
            type: stringReqT,
            mode: stringReqT
        })
        // type: 信池类型； mode: 信件类型
        const { type, mode } = ctx.request.body;

        try {
            // 公共信池
            if (type === PoolLetterType.public) {
                const _mode = 2;
                // 漫游信件
                if (mode === LetterMode.wander) {
                    const res = await Letter.find({
                        mode: _mode
                    })
                    .select('+status')
                    .populate('owner');

                    ctx.body = new SuccessModel({
                        list: res
                    }, '成功获取信件');
                    return;
                }
                return;
            }

            ctx.body = new SuccessModel('没有更多信件了');
        } catch (err) {
            ctx.body = new ErrorModel('获取信件失败');
        }
    }

    // 信池回信
    async PoolReply(ctx, next) {
        ctx.verifyParams({
            title: stringReqT,
            context: stringReqT,
            replyed_id: stringReqT,
            letter_id: stringReqT
        });
        
        try {
            const user_id = ctx.state.user._id;
            const { title, context, replyed_id, letter_id } = ctx.request.body;
            const arr = [];
            arr.push(user_id); arr.push(replyed_id);
            arr.sort();
            const identify_id = arr[0] + arr[1];
    
            const { _id } = await new Letter({
                title,
                context,
                owner: user_id,
                mode: 4
            })
            .save();
    
            const reply = await new Reply({
                owner_id: user_id,
                letter_id: _id,
                identify_id
            })
            .save();
    
            await Letter.updateOne({
                _id: letter_id
            }, {
                $inc: { repliers: 1 }
            });

            ctx.body = new SuccessModel('回信成功，成为信友！');
        } catch (err) {
            ctx,body = new ErrorModel('回信失败');
        }
    }

    async checkLetterReplay (ctx, next) {
        ctx.verifyParams({
            owner_id: stringReqT
        });

        try {
            const user_id = ctx.state.user._id;
            const { owner_id } = ctx.request.body;
            if (user_id === owner_id) {
                ctx.body = new ErrorModel('无法与自己建立信友关系');
                return;
            }
            const arr = [];
            arr.push(user_id); arr.push(owner_id);
            arr.sort();
            const identify_id = arr[0] + arr[1];

            const res = await Reply.find({
                identify_id
            });
            
            if (res.length === 0) {
                ctx.body = new SuccessModel({
                    replyed: 0
                }, '尚未建立信友关系');
                return;
            }
            ctx.body = new SuccessModel({
                replyed: 1
            }, '已建立信友关系');
        } catch (err) {
            ctx.body = new ErrorModel('回信功能出现问题');
            console.log(err);
        }
    }
}


module.exports = new LetterCtrl()