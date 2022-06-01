/**
 * @description 信件举报按钮组件
 * @author Uni
 */

import { Toast } from "@douyinfe/semi-ui";
import { useRequest } from "ahooks";
import { useSelector } from "react-redux"
import { postBadReport } from "../../service";
import { selectCurrentLetter } from "../../store/readReducer"


export default function BadReport() {

    const { _id } = useSelector(selectCurrentLetter);

    const { run } = useRequest(postBadReport, {
        manual: true,
        onSuccess: ({msg, code}) => {
            if (code === 1) {
                return Toast.success(msg);
            }
            if (code === 0) {
                return  Toast.warning(msg);
            }
        },
        onError: () => {
            Toast.warning('举报失败')
        }
    })

    const handleClick = () => {
        run({
            _id
        });
    }

    return (
        <div 
            className='button'
            onClick={handleClick}
        >
            <i className='iconfont icon-jubao bad-report'></i>
        </div>
    )
}