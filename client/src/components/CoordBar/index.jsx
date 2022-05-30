/**
 * @description 顶部坐标展示
 * @author Uni
 */

import { useSelector } from "react-redux";
import { selectCurrentLetter } from "../../store/readReducer";
import { CoordBarWrapper } from "./style";

export default function CoordBar() {
    const { areaX, areaY } = useSelector(selectCurrentLetter);
    return (
        <CoordBarWrapper>
            <div>({areaX.toFixed(2)}, {areaY.toFixed(2)})</div>
        </CoordBarWrapper>
    )
}