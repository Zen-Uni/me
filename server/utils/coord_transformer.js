/**
 * @description 虚拟分区
 * @author Uni
 */

/**
 * 
 * @param {被回信人的x轴坐标} a 
 * @param {被回信人的y轴坐标} b 
 * @param {回信人的x轴坐标} x 
 * @param {回信人的y轴坐标} y 
 */
const CoordTransformer = (a, b, x, y, weight) => {
    const areaX = (a + x) / weight;
    const areaY = (b + y) / weight;
    return {
        areaX,
        areaY
    }
}

module.exports = CoordTransformer;