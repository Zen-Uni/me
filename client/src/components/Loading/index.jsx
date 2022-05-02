/**
 * @description 全局 Loading 组件
 * @author Uni
 */

import Img from './Loading.gif'
import { LoadingWrapper } from './style'
import { Spin } from '@douyinfe/semi-ui'
export default function Loading() {
    return (
        <LoadingWrapper>
            {/* <img src={Img} /> */}
            <Spin size="large" />
        </LoadingWrapper>
    )
}