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
    text: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 1,  // 默认值为 1（积极） 0 是消极
        select: false
    },
    // 信件类型
    mode: {
        type: Number,  // 0: 给自己(无时间戳) | 1: 给自己(有时间戳) | 2: 公共信池 | 3: 区域信池
        required: true
    },
    // TODO: Letter Schema
    // 自己是否可见
    send_status: {
        type: Number,
        default: 0
    },
    readers: {
        type: Number,
        select: false
    },
    repliers: {
        type: Number,
        select: false
    },
    // 信件是否合规
    tag: {
        type: Number,
        default: 0,   // 0: 合规 | 1: 不合规
        select: false
    }
})


const Letter = model('Letter', letterSchema)

module.exports = Letter