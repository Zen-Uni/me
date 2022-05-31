/**
 * @description 信件 Schema
 * @author Uni
 */

const { Schema, model } = require("mongoose");


const letterSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    context: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 0,  // 默认值为 0（积极） 1 是消极
        select: false
    },
    // 信件类型
    mode: {
        type: Number,  // 0: 给自己(无时间戳) | 1: 给自己(有时间戳) | 2: 公共信池 | 3: 区域信池 | 4: 回信
        required: true
    },
    // 自己是否可见
    send_status: {
        // TODO: 修改信件是否可见的逻辑
        type: Number,  // 0: 不可见 ｜ 1: 可见
        default: 1
    },
    readers: {
        type: Number,
        select: false,
        default: 0
    },
    repliers: {
        type: Number,
        select: false,
        default: 0
    },
    // 信件是否合规
    tag: {
        type: Number,
        default: 0,   // 0: 合规 | 1: 不合规
        select: false
    },
    // 信件作者
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // 邮寄到未来的日期
    sendTo: {
        type: String,
        select: false
    },
    relativePos: {
        type: String,
        select: false
    },
    relativeNav: {
        type: String,
        select: false
    }
},
{
    timestamps: true
})


const Letter = model('Letter', letterSchema)

module.exports = Letter