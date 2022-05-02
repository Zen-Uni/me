/**
 * @description 信件内容组件
 * @author Uni
 */

import { TextArea } from "@douyinfe/semi-ui";
import { ContextBarWrapper } from "./style";


export default function ContextBar() {

    return (
        <ContextBarWrapper>
            <TextArea 
                className="textarea"
                placeholder="最近有什么烦心事嘛～"
            />
        </ContextBarWrapper>
    )
}