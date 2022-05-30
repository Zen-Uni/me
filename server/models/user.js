/**
 * @description 用户 Schema
 * @author Uni
 */


const { Schema, model } = require('./db')

// 用户 Schema
const userSchema = new Schema({
    username: String,
    password: {
        type: String,
        select: false
    },
    email: String,
    status: {
        type: Number,
        default: 1,  // 默认值为 1（积极） 0 是消极
    },
    avatar_url: {
        type: String,
        select: true
    },
    friends: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        select: false
    },
    letters: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Letter'
            }
        ],
        select: false
    },
    areaX: {
        type: Number,
        select: true,
        default: 0
    },    // 虚拟位置，x轴
    areaY: {
        type: Number,
        select: true,
        default: 0
    },    // 虚拟位置，y轴
},
    {
        timestamps: true
    }
)

const User = model('User', userSchema)

module.exports = User