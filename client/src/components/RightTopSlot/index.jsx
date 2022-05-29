/**
 * @description 信件界面的右上角工具栏
 * @author Uni
 */

import BadReport from "./BadReport";
import FeedBack from "./FeedBack";
import { RightTopSlotWrappers } from "./style";

export default function RightTopSlot() {

    return (
        <RightTopSlotWrappers>
            <FeedBack/>
            <BadReport/>
        </RightTopSlotWrappers>
    )
}