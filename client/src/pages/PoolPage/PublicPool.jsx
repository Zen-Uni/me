/**
 * @description 公共信池主页
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
 
 export default function PublicPool() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateMode(MODE_TYPE.public));
    }, []);

     return (
         <PoolPageWrapper>
             <RollBack/>
             <PoolTitle text="公共信池"/>
             <PoolMsg type='public_pool'/>
             <PoolSelect/>
         </PoolPageWrapper>
     )
 }