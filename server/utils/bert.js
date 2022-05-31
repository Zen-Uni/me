/**
 * @description BERT 服务调用
 *
 */


const { execSync } = require('child_process');
const { ErrorModel } = require('./res_model');
const APIError = new ErrorModel('BERT 调用失败')

module.exports = {
    'POST /api/sentiment': async (ctx, next) => {
        const { sentence } = ctx.request.body

        const arr = sentence.split('\n')
        const new_arr = arr.map(item => item.replace(/\s/g,""))
        const new_sentence = new_arr.join("[SEP]")

        const interperter = "/home/elpis_ubuntu/anaconda3/envs/wrench/bin/python3"
        const proj_path = "/home/elpis_ubuntu/gd_proj/inference.py"
        const model_path = "/home/elpis_ubuntu/gd_proj/saved_model_weibo_base.pkl"

        sentiment = execSync(`${interperter} -u ${proj_path} --text ${new_sentence} --model_path ${model_path}`)
        sentiment = sentiment.toString()
        sentiment = sentiment.substring(0, sentiment.length - 1)
        ctx.rest({
            distribution: sentiment
        });
    }
};