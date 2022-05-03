/**
 * @description 写信组件的顶部控制组件
 * @author Uni
 */

import { Input } from "@douyinfe/semi-ui";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateTitle } from "../../store/letterReducer";
import { ToolBarWrapper } from "./style";

export default function ToolBar() {
    
    const navigate = useNavigate()

    const handleCancel = () => {
        navigate(-1)
    }

    const dispatch = useDispatch()

    return (
        <ToolBarWrapper>
            <div className="cancel" onClick={handleCancel}>取消</div>
            <div className="input_box">
                <Input className="input" placeholder="标题"
                    onChange={(value) => {
                        dispatch(updateTitle(value))
                    }}
                />
            </div>
            <div className="post">投递</div>
        </ToolBarWrapper>
    )
}