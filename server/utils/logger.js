/**
 * @description 用于调试打印
 * @author Uni
 */

const tag = 'UNI --- '

const nameOf = (obj) => {
    return Object.keys(obj)[0]
}
const valOf = (obj) => {
    return Object.keys(obj)[1]
}
const logger = (res) => {
    const identifier = nameOf(res)
    console.log(tag + identifier + ' ---------- ' + JSON.stringify(res))
}

module.exports = logger