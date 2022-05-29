/**
 * @description 信池页相关入口插槽
 * @author Uni
 */

import { PoolSelectWrapper } from "./style";
import { useNavigate } from 'react-router-dom'

export default function PoolSelect() {

    const navigate = useNavigate();

    const handleWander = () => {
        navigate('/letter')
    }

    return (
        <PoolSelectWrapper>
            <div 
                className='begin'
                onClick={handleWander}
            >开始漫游</div>
            <div className='category'>
                <div className="positive">积极信件</div>
                <div className="negative">消极信件</div>
            </div>
            <div className='send'>投递信件</div>
        </PoolSelectWrapper>
    )
}