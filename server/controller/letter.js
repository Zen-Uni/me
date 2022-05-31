/**
 * @description 写信控制器
 * @author Uni
 */

const axios = require('axios');
const BERT_API = require('../config/bert');

const Letter = require("../models/letter");
const Reply = require('../models/relay');
const User = require("../models/user");
const CoordTransformer = require('../utils/coord_transformer');
const { SuccessModel, ErrorModel } = require("../utils/res_model");
const { stringReqT, numberReqT } = require("./config/paramsVerifyList")

const LetterType = {
    self_status: 0,
    self_date: 1,
    pool_public: 2,
    pool_area: 3,
    pool_reply: 4,
    friend_send: 5
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
                    relativeNav,
                    send_status: 0
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

    async getAreaNum(ctx, next) {
        ctx.verifyParams({
            areaX: numberReqT,
            areaY: numberReqT
        });

        try {
            const { areaX, areaY } = ctx.request.body;
            
            const list = await Letter.find({
                mode: LetterType.pool_area
            })
            .select('+owner +status')
            .populate('owner');
            console.log('area list ------- ', list);
            const res = list.filter((item) => {
                const a = item.owner.areaX;
                const b = item.owner.areaY;
                console.log(a ,b);
                if ( a > areaX - 50 && a < areaX + 50 && b > areaY - 50 && b < areaY + 50) {
                    return true;
                }
                return false;
            })
            console.log('area res ----- ', res);

            ctx.body = new SuccessModel({
                data: res
            }, '获取成功');

        } catch (err) {
            console.log(err);
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
            letter_id: stringReqT,
            a: numberReqT,
            b: numberReqT,
            x: numberReqT,
            y: numberReqT
        });
        
        try {
            const user_id = ctx.state.user._id;
            const { title, context, replyed_id, letter_id, a, b, x, y } = ctx.request.body;
            const arr = [];
            arr.push(user_id); arr.push(replyed_id);
            arr.sort();
            const identify_id = arr[0] + arr[1];
            const { areaX, areaY } = CoordTransformer(a, b, x, y, 2);   // 信池回信的权重为 2

    
            const { _id } = await new Letter({
                title,
                context,
                owner: user_id,
                mode: LetterType.pool_reply
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

            // 更新虚拟坐标
            await User.updateOne({
                _id: user_id
            }, {
                areaX,
                areaY
            });

            const userA = await User.findById(user_id)
            .select('+friends');

            userA.friends.push(replyed_id);

            const userB = await User.findById(replyed_id).select('+friends');
            userB.friends.push(user_id);

            userA.save();
            userB.save();

            ctx.body = new SuccessModel('回信成功，成为信友！');
        } catch (err) {
            ctx.body = new ErrorModel('回信失败');
            console.log(err);
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


    async getSelfList(ctx, next) {
       try {
            const _id = ctx.state.user._id;
                
            const { status } = await User.findOne({ _id });

            const letters = await Letter.find({
                owner: _id
            })
            .select('+sendTo')
            .populate('owner')
            .sort({'_id': -1});

            const res = letters.filter(item => {
                const time = new Date();
                if (item.mode === LetterType.self_date) {
                    const date = new Date(item.sendTo);
                    console.log(item.sendTo);
                    console.log(time);
                    if (date < time) return true;
                    console.log('trigger ---- ');
                    return false;
                }
                if (item.mode === LetterType.self_status) {
                    if (item.send_status === 1 && status !== item.status) {
                        return true;
                    }
                    return false;
                }

                return false;
            });

            ctx.body = new SuccessModel({
                list: res
            }, '信件获取成功');
       } catch (err) {
            console.log(err);
            ctx.body = new ErrorModel('信件获取失败');
       }
    }


    async getFriendLetter(ctx, next) {
        const _id = ctx.state.user._id;
        const {friend_id} = ctx.request.body;
        const arr = [];
        arr.push(_id); arr.push(friend_id);
        arr.sort();
        const identify_id = arr[0] + arr[1];

        try {
            const res = await Reply.find({
                identify_id
            })
            .populate('letter_id')
            .populate('owner_id')
            .sort({'_id': -1});

            ctx.body = new SuccessModel({
                list: res
            }, '获取来往信件成功');
        } catch (err) {
            console.log(err);
        }
    }


    async sendLetterToFriend (ctx, next) {
        ctx.verifyParams({
            title: stringReqT,
            context: stringReqT,
            friend_id: stringReqT
        });

        try {
            const _id = ctx.state.user._id;
            const { friend_id, title, context } = ctx.request.body;
            const letter = await new Letter({
                title,
                context,
                owner: _id,
                mode: LetterType.friend_send
            })
            .save();
    
            const arr = [];
            arr.push(_id); arr.push(friend_id);
            arr.sort();
            const identify_id = arr[0] + arr[1];
    
            const reply = await new Reply({
                identify_id,
                owner_id: _id,
                letter_id: letter._id
            })
            .save();
            ctx.body = new SuccessModel('回信成功');
        } catch (err) {
            console.log(err);
            ctx.body = new ErrorModel('回信失败');
        }
    }
}


module.exports = new LetterCtrl()