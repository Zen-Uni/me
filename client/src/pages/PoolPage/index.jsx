/**
 * @description 信池首页
 * @author Uni
 */

 import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import PoolMsg from "../../components/PoolMsg";
import PoolTitle from "../../components/PoolTitle";
import RollBack from "../../components/RollBack";
import { MODE_TYPE, updateMode } from "../../store/postReducer";
import { selectUser } from "../../store/userReducer";
import { PoolButtonWrapper, PoolPageWrapper } from "./style";

// HOC
const PoolButton = ({ comp }) => {
    return (
        <PoolButtonWrapper>
            { comp }
        </PoolButtonWrapper>
    )
}

const PublicPoolButton = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(updateMode(MODE_TYPE.public))
        navigate('/pool/public')
    }

    return (
        <div 
            className='item public-item'
            onClick={handleClick}
        >
            公共信池
        </div>
    )
}

const AreaPoolButton = () => {

    const { areaX, areaY } = useSelector(selectUser)
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/pool/area')
    }
    return (
        <div 
            className='item area-item'
            style={{
                backgroundColor: `rgba(${Math.floor(areaX)}, ${Math.floor(areaY)}, 0, .7)`
            }}
            onClick={handleClick}
        >
            区域信池
        </div>
    )
}

 export default function PoolMain() {
 
     return (
         <PoolPageWrapper>
            <RollBack/>
            <PoolTitle text='信池'/>
            <PoolMsg type='coord'/>
            <PoolButton comp={<PublicPoolButton/>}></PoolButton>
            <PoolButton comp={<AreaPoolButton/>}></PoolButton>
         </PoolPageWrapper>
     )
 }