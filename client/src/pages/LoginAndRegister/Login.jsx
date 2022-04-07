/**
 * @description Login 组件
 * @author Uni
 */

import { Button, Form } from "@douyinfe/semi-ui"


export default function Login({
    handleSwitch
}) {


    return (
        <Form
            layout="vertical"
        >
            {
                ({formState, formApi, values}) => (
                    <>
                        <Form.Input field="email" label="邮箱"/>
                        <Form.Input field="password" label="密码"/>
                        <Button onClick={handleSwitch}>去注册</Button>
                        <Button onClick={() => {
                            console.log('formstate --- ', formState.values)
                            console.log('values ----', values)
                        }}>登录</Button>
                    </>
                )
            }
        </Form>
    )
}