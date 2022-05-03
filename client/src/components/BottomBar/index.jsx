/**
 * @description 底部工具栏
 * @author Uni
 */
// TODO: BottomBar 的开发


import { DatePicker } from "@douyinfe/semi-ui";
import { useDispatch } from "react-redux";
import { updateSendTo } from "../../store/letterReducer";
import { BottomBarWrapper } from "./style";


export default function BottomBar() {

    const dispatch = useDispatch()

    return (
        <BottomBarWrapper>
            <DatePicker
                density="compact"
                type="dateTime"
                placeholder="寄给未来的自己"
                onChange={(date, dateStr) => {
                    dispatch(updateSendTo(dateStr))
                }}
            />
        </BottomBarWrapper>
       
    )
}