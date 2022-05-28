/**
 * @description 侧边栏个人设置
 * @author Uni
 */

import { SideSheet } from '@douyinfe/semi-ui'
import { SlideWrapper } from './style'
import avatar from './image/avatar.jpg';

export default function Slider({
    isSlide,
    onChange
}) {
    return (
        <SideSheet 
            visible={isSlide} 
            onCancel={onChange} 
            placement="left" 
            width={200}
            keepDOM={true}
            closable={false}
        >
            <SlideWrapper>
                <div className='avatar'
                    style={{
                        backgroundImage: `url(${avatar})`
                    }}
                ></div>
                <div className='headline'>
                    <i>Uni · (7.25, 8.24)</i>
                </div>
                <div className='item'>
                    账号设置
                </div>
                <div className='item'>
                    情绪监测
                </div>
                <div className='item'>
                    关于
                </div>
                <div className='quit'>
                    退出登录
                </div>
            </SlideWrapper>
        </SideSheet>
    )
}