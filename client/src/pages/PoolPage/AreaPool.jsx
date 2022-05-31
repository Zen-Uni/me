/**
 * @description 区域信池主页
 * @author Uni
 */

 import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PoolMsg from "../../components/PoolMsg";
import PoolSelect from "../../components/PoolSelect";
 import PoolTitle from "../../components/PoolTitle";
 import RollBack from "../../components/RollBack";
import { MODE_TYPE, updateMode } from "../../store/postReducer";
 import { PoolPageWrapper } from "./style";
 
 export default function AreaPool() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateMode(MODE_TYPE.area));
    }, []);


     return (
         <PoolPageWrapper>
             <RollBack/>
             <PoolTitle text="区域信池"/>
             <PoolMsg type='area_pool'/>
             <PoolSelect/>
         </PoolPageWrapper>
     )
 }