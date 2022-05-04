/**
 * @description 写信组件的顶部控制组件
 * @author Uni
 */

import { Input, Toast } from "@douyinfe/semi-ui";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectWriteContext, selectWriteSendTo, selectWriteTittle, updateTitle } from "../../store/letterReducer";
import { ToolBarWrapper } from "./style";
import { useRequest } from 'ahooks'
import { MODE_TYPE, selectPost } from "../../store/postReducer";
import { postSelfDateReq, postSelfStatusReq } from "../../service";

export default function ToolBar() {
    
    const navigate = useNavigate()
    const title = useSelector(selectWriteTittle)
    const context = useSelector(selectWriteContext)
    const sendTo = useSelector(selectWriteSendTo)
    const postMode = useSelector(selectPost)
    const dispatch = useDispatch()

    // 信件投递反馈表现
    const onSuccess = ({ msg }) => {
        Toast.success(msg)
        navigate(-1)
    }   
    const onError = ({ response }) => {
        Toast.warning(response.data.msg)
    }

    // 请求配置
    const config = {
        manual: true,
        onSuccess,
        onError
    }

    // req - post self status letter
    const { run: runSelfStatus } = useRequest(postSelfStatusReq, config)

    // req - post self date letter
    const { run: runSelfDate } = useRequest(postSelfDateReq, config)

    // TODO: 其他类型信件的 req


    const handleCancel = () => {
        navigate(-1)
    }

    const handleClick = () => {
        if (context === '') {
            return Toast.warning("信件内容不能为空哦")
        }

        console.log(context)

        // 给自己写信
        if (postMode === MODE_TYPE.self) {
            // 状态类信件
            if (sendTo === '') {
                const data = {
                    title,
                    context
                }

                runSelfStatus(data)
                return 
            }

            const data = {
                title,
                context, 
                sendTo
            }

            runSelfDate(data)
            return 
        }

        if (postMode === MODE_TYPE.pool) {
            return 
        }


        return Toast.error("报告！出现问题了！")
    }

    return (
        <ToolBarWrapper>
            <div className="cancel" onClick={handleCancel}>取消</div>
            <div className="input_box">
                <Input className="input" placeholder="标题"
                    onChange={(value) => {
                        dispatch(updateTitle(value))
                    }}
                />
            </div>
            <div 
                className="post"
                onClick={handleClick}
            >投递</div>
        </ToolBarWrapper>
    )
}