/**
 * @description 生成默认坐标
 * @author Uni
 */

const createDefaultArea = (min, max) => {
    return Math.random() * (max - min)
}

module.exports = createDefaultArea