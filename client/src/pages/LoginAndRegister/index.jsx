/**
 * @description 登录注册路由入口组件
 * @author Uni
 */

import { useState } from "react"
import Login from "./Login"
import Register from "./Register"

function LoginAndRegister() {

    const [loginState, setLoginState] = useState(true)

    const handleSwitch = () => {
        setLoginState(!loginState)
    }

    return (
        loginState ? <Login handleSwitch={handleSwitch}/> : <Register handleSwitch={handleSwitch}/>
    )
}

export default LoginAndRegister