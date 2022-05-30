/**
 * @description 信件文本内容组件
 * @author Uni
 */

import { useSelector } from "react-redux";
import { selectCurrentLetter } from "../../store/readReducer";
import { ContextWrapper } from "./style";

export default function Context() {
    const { context } = useSelector(selectCurrentLetter);

    return (
        <ContextWrapper>
            {context}
        </ContextWrapper>
    )
}