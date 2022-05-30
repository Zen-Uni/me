/**
 * @description 公共信池主页
 * @author Uni
 */

 import PoolMsg from "../../components/PoolMsg";
import PoolSelect from "../../components/PoolSelect";
 import PoolTitle from "../../components/PoolTitle";
 import RollBack from "../../components/RollBack";
 import { PoolPageWrapper } from "./style";
 
 export default function PublicPool() {

    

     return (
         <PoolPageWrapper>
             <RollBack/>
             <PoolTitle text="公共信池"/>
             <PoolMsg type='public_pool'/>
             <PoolSelect/>
         </PoolPageWrapper>
     )
 }