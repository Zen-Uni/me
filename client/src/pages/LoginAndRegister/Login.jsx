/**
 * @description Login 组件
 * @author Uni
 */

import { Button, Form } from "@douyinfe/semi-ui"
import { useRequest } from "ahooks"
import { useNavigate } from "react-router"
import { loginReq } from "../../service"
import { Toast } from '@douyinfe/semi-ui'
import { configReq, storeToken } from "../../utils/token"
import { LoginWrapper } from "./style"

export default function Login({
    handleSwitch
}) {

    const navigate = useNavigate()

    const { data, run } = useRequest(loginReq, {
        manual: true,
        onSuccess: ({ code, msg, data }) => {
            if (!code) {
                Toast.warning(msg)
                return
            }

            Toast.success(msg)
            storeToken(data?.token)
            configReq()
            navigate('/')
        },  
        onError: ({response}) => {
            console.log(response.status === 422)
        }
    })

    const handleClick = (values) => {
        run('/user/login', values)
    }

    return (
       <LoginWrapper>
        <Form
            labelPosition="inset"
            layout="vertical"
        >
            {
                ({ values }) => (
                    <>
                        <Form.Input field="email" label="邮箱"/>
                        <Form.Input field="password" label="密码"/>
                        <Button onClick={handleSwitch}>去注册</Button>
                        <Button onClick={() => handleClick(values)}>登录</Button>
                    </>
                )
            }
        </Form>
       </LoginWrapper>
    )
}