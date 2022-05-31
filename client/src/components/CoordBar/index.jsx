/**
 * @description 顶部坐标展示
 * @author Uni
 */

import { useSelector } from "react-redux";
import { selectCurrentLetter } from "../../store/readReducer";
import { CoordBarWrapper } from "./style";

export default function CoordBar({ username }) {
    const { areaX, areaY } = useSelector(selectCurrentLetter);
    return (
        <CoordBarWrapper>
            { username ? <div>{username}</div> : <div>({areaX.toFixed(2)}, {areaY.toFixed(2)})</div> }
        </CoordBarWrapper>
    )
}