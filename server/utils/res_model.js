/**
 * @description 响应模型
 * @author Uni
 */

 class BasicModel {
    constructor(data, msg) {
        if (typeof data === 'string') {
            this.msg = data
            data = null
            msg = null
        }

        if (data) {
            this.data = data
        }

        if (msg) {
            this.msg = msg
        }
    }
}

// 成功响应
class SuccessModel extends BasicModel {
    constructor(data, msg) {
        super(data, msg)
        this.code = 1
    }
}

// 失败响应
class ErrorModel extends BasicModel {
    constructor(data, msg) {
        super(data, msg)
        this.code = 0
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}