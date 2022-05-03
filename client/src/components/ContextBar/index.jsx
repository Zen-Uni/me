/**
 * @description 信件内容组件
 * @author Uni
 */

import { TextArea } from "@douyinfe/semi-ui";
import { useDispatch } from "react-redux";
import { updateContext } from "../../store/letterReducer";
import { ContextBarWrapper } from "./style";


export default function ContextBar() {

    const dispatch = useDispatch()

    return (
        <ContextBarWrapper>
            <TextArea 
                className="textarea"
                placeholder="最近有什么烦心事嘛～"
                onChange={(value) => {
                    dispatch(updateContext(value.trim()))
                }}
            />
        </ContextBarWrapper>
    )
}