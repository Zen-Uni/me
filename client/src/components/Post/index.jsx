/**
 * @description 写信按钮组件
 * @author Uni
 */

import { PostWrapper } from "./style";
import { useNavigate } from 'react-router-dom'

export default function Post() {

    const navigate = useNavigate()


    const handleClick = () => {
        navigate('/post')
    }

    return (
        <PostWrapper>
            <div className="button" onClick={handleClick}>写信</div>
        </PostWrapper>
    )
}