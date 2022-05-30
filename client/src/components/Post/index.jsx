/**
 * @description 写信按钮组件
 * @author Uni
 */

import { PostWrapper } from "./style";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { MODE_TYPE, updateMode } from "../../store/postReducer";

export default function Post() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(updateMode(MODE_TYPE.self))
        navigate('/post')
    }

    return (
        <PostWrapper>
            <div className="button" onClick={handleClick}>
                <i className='iconfont icon-tianjia'></i>
            </div>
        </PostWrapper>
    )
}