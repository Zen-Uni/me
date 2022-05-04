/**
 * @description 回退按钮组件
 * @author Uni
 */

import { useNavigate } from "react-router"
import { RollBackWrapper } from "./style"

export default function RollBack() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1)
    }

    return (
        <RollBackWrapper onClick={handleClick}>
            <i className="icon-back iconfont"></i>
        </RollBackWrapper>
    )
}