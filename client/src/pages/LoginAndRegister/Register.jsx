/**
 * @description register 组件
 * @author Uni
 */

import { Button, Col, Form, Row } from "@douyinfe/semi-ui";
import { useRequest } from "ahooks";
import { registerReq } from "../../service";

export default function Register({
    handleSwitch
}) {


    const { data, run } = useRequest(registerReq, {
        manual: true,
        onSuccess: (res) => {
            console.log(res)
        },
        onError: ({ response }) => {
            console.log(response)
        }
    })

    const handleClick = (values) => {
        run('/user/register', values)
    }

    return (
        <Form
            layout="vertical"
        >
            {
                // TODO: 修改 register 的 label 问题
                ({ formState, formApi, values }) => {
                    return (
                        <>
                            <Form.Input field="email" label="邮箱"/>
                            <Form.Input field="username" label="用户名"/>
                            <Form.Input field="password" label="密码"/>
                            {/* TODO: 控制表单的行 */}
                            {/* <Row>
                                <Col span={8}>
                                    <Form.Input field="captcha" placeholder="请输入验证码" />
                                </Col>
                                <Col span={8}>
                                    <Button>获取验证码</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Button
                                    onClick={handleSwitch}
                                >去登录</Button>
                            </Row> */}
                            {/* 管理这一部分的样式 */}
                            <Row>
                                <Button onClick={handleSwitch}>去注册</Button>
                                <Button
                                    onClick={() => handleClick(values)}
                                >
                                    注册
                                </Button>
                            </Row>
                        </>
                    )
                }
            }
        </Form>
    )
}