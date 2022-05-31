/**
 * @description 回信 Schema
 * @author Uni
 */

const { Schema, model } = require("mongoose");

const replySchema = new Schema({
    owner_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    identify_id: {
        type: String
    },
    letter_id: {
        type: Schema.Types.ObjectId,
        ref: 'Letter'
    }
},
{
    timestamps: true
});

const Reply = model('Reply', replySchema);

module.exports = Reply;