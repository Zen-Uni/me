/**
 * @description 信池按钮组件
 * @author Uni
 */

import { useNavigate } from "react-router";
import { PoolWrapper } from "./style";

export default function Pool() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/pool')
    }


    return (
        <PoolWrapper>
            <div 
                className="button" 
                onClick={handleClick}
            >
                <i className='iconfont icon-yongyan'></i>
            </div>
        </PoolWrapper>
    )
}