import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { MODE_TYPE, updateMode } from "../../store/postReducer";
import { WriteWrapper } from "./style";


export default function Write() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(updateMode(MODE_TYPE.friend));
        navigate('/post');
    }

    return (
        <WriteWrapper onClick={handleClick}>
             <i className='iconfont icon-tubiao_fankui'></i>
        </WriteWrapper>
    )
}