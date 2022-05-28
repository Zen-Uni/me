/**
 * @description 区域信池主页
 * @author Uni
 */

 import PoolSelect from "../../components/PoolSelect";
 import PoolTitle from "../../components/PoolTitle";
 import RollBack from "../../components/RollBack";
 import { PoolPageWrapper } from "./style";
 
 export default function AreaPool() {
     return (
         <PoolPageWrapper>
             <RollBack/>
             <PoolTitle text="区域信池"/>
             <PoolSelect/>
         </PoolPageWrapper>
     )
 }