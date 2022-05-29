/**
 * @description 信件举报按钮组件
 * @author Uni
 */


export default function BadReport() {

    const handleClick = () => {
        console.log('this is bad report')
    }

    return (
        <div 
            className='button'
            onClick={handleClick}
        >
            <i className='iconfont icon-jubao bad-report'></i>
        </div>
    )
}