/**
 * @description 信件读信页面
 * @author Uni
 */


import CoordBar from "../../components/CoordBar";
import LetterContext from "../../components/LetterContext";
import RightTopSlot from "../../components/RightTopSlot";
import RollBack from "../../components/RollBack";
import { LetterPageWrapper } from "./style";

export default function LetterPage() {

    return (
        <LetterPageWrapper>
            <div className='header-layer'></div>
            <RollBack/>
            <RightTopSlot/>
            <CoordBar/>
            <LetterContext/>
        </LetterPageWrapper>
    )
}