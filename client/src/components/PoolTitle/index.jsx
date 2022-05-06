/**
 * @description 信池页面的 Title 公用组件
 * @author Uni
 */

import { PoolTitleWrapper } from "./style";


export default function PoolTitle({
    text
}) {

    return (
        <PoolTitleWrapper>
            { text }
        </PoolTitleWrapper>
    )
}