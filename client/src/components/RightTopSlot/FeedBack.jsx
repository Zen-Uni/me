/**
 * @description 信件情绪状态反馈按钮
 * @author Uni
 */

import { Popover } from '@douyinfe/semi-ui'
import { FeedButtonWrapper } from './style'


const PositiveButton = () => {
    return (
        <div className='feed-button'>
            积极
        </div>
    )
}

const NegativeButton = () => {
    return (
        <div className='feed-button'>
            消极
        </div>
    )
}

const FeedBackPopover = () => {
    return (
        <FeedButtonWrapper>
            <PositiveButton/>
            <NegativeButton/>
        </FeedButtonWrapper>
    )
}

export default function FeedBack() {
 
    return (
        <Popover 
            content={<FeedBackPopover/>}
            // style={{
            //     height: '100px',
            //     width: '100px'
            // }}
        >
            <div 
                className='button'
            >
                <i className='iconfont icon-tubiao_fankui feed-back'></i>
            </div>
        </Popover>
    )
}

