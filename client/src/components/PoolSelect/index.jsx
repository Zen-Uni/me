/**
 * @description 信池页相关入口插槽
 * @author Uni
 */

import { PoolSelectWrapper } from "./style";

export default function PoolSelect() {
    return (
        <PoolSelectWrapper>
            <div className='begin'>开始漫游</div>
            <div className='category'>
                <div className="positive">积极信件</div>
                <div className="negative">消极信件</div>
            </div>
            <div className='send'>投递信件</div>
        </PoolSelectWrapper>
    )
}