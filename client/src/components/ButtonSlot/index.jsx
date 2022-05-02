/**
 * @description 右下角按钮插槽，方便扩展全局按钮
 * @author Uni
 */

import Post from "../Post";
import { ButtonSlotWrapper } from "./style";

export default function ButtonSlot({
    children
}) {
    return (
        <ButtonSlotWrapper>
            {
                children
            }
        </ButtonSlotWrapper>
    )
}