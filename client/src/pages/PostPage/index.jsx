/**
 * @description 写信页面组件
 * @author Uni
 */

import { useSelector } from "react-redux";
import BottomBar from "../../components/BottomBar";
import ButtonSlot from "../../components/ButtonSlot";
import ContextBar from "../../components/ContextBar";
import ToolBar from "../../components/ToolBar";
import { MODE_TYPE, selectPost } from "../../store/postReducer";

export default function PostPage() {
    const postStatus = useSelector(selectPost)

    

    return (
        <>
            <ToolBar/>
            <ContextBar/>
            {
                postStatus === MODE_TYPE.self
                ? 
                (
                    <ButtonSlot>
                        <BottomBar/>
                    </ButtonSlot>
                )
                : 
                null 
            }
        </>
    )
}