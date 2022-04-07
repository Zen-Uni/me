/**
 * @description 全局 Loading 组件
 * @author Uni
 */

import Img from './Loading.gif'
import { LoadingWrapper } from './style'
export default function Loading() {
    return (
        <LoadingWrapper>
            <img src={Img} />
        </LoadingWrapper>
    )
}