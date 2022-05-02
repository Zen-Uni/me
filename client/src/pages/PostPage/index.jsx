/**
 * @description 写信页面组件
 * @author Uni
 */

import { useSelector } from "react-redux";
import { selectPost } from "../../store/postReducer";

export default function PostPage() {
    const postStatus = useSelector(selectPost)

    console.log(postStatus)

    return (
        <>
            {
                postStatus
            }
        </>
    )
}