/**
 * @description 侧边栏个人设置
 * @author Uni
 */

import { SideSheet } from '@douyinfe/semi-ui'

export default function Slider({
    isSlide,
    onChange
}) {
    return (
        <SideSheet visible={isSlide} onCancel={onChange} placement="left" width={200}>

        </SideSheet>
    )
}