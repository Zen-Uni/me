/**
 * @description 信件读信页面
 * @author Uni
 */


import RightTopSlot from "../../components/RightTopSlot";
import RollBack from "../../components/RollBack";
import { LetterPageWrapper } from "./style";

export default function LetterPage() {

    return (
        <LetterPageWrapper>
            <RollBack/>
            <RightTopSlot/>
        </LetterPageWrapper>
    )
}