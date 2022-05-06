/**
 * @description 信池主页
 * @author Uni
 */

import PoolSelect from "../../components/PoolSelect";
import PoolTitle from "../../components/PoolTitle";
import RollBack from "../../components/RollBack";
import { PoolPageWrapper } from "./style";

export default function PoolPage() {
    return (
        <PoolPageWrapper>
            <RollBack/>
            <PoolTitle text="信池"/>
            <PoolSelect/>
        </PoolPageWrapper>
    )
}