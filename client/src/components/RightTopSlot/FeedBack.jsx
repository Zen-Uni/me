/**
 * @description 信件情绪状态反馈按钮
 * @author Uni
 */

import { Popover } from '@douyinfe/semi-ui'
import { useState } from 'react'
import { FeedButtonWrapper } from './style'


const PositiveButton = ({ setFeeded }) => {
    return (
        <div 
            className='feed-button'
            onClick={() => setFeeded(true)}
        >
            积极
        </div>
    )
}

const NegativeButton = ({ setFeeded }) => {
    return (
        <div 
            className='feed-button'
            onClick={() => setFeeded(true)}
        >
            消极
        </div>
    )
}

const FeedBackPopover = ({ setFeeded, feeded }) => {
    return (
        <FeedButtonWrapper>
            {
                feeded ? <FeededMsg/> : (
                    <>
                        <PositiveButton setFeeded={setFeeded}/>
                        <NegativeButton setFeeded={setFeeded}/>
                    </>
                )
            }
        </FeedButtonWrapper>
    )
}

const FeededMsg = () => {
    return (
        <div className='feed-button'>
            已反馈
        </div>
    )
}

export default function FeedBack() {
    const [feeded, setFeeded] = useState(false);

 
    return (
        <Popover 
            content={<FeedBackPopover feeded={feeded} setFeeded={setFeeded}/>}
            clickToHide={true}
        >
            <div 
                className='button'
            >
                <i className='iconfont icon-tubiao_fankui feed-back'></i>
            </div>
        </Popover>
    )
}

