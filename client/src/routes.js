/**
 * @description 路由配置
 * @author Uni
 */

import AuthCom from "./components/AuthCom"
import Layout from "./components/Layout"
import LoginAndRegister from "./pages/LoginAndRegister"

const routes = [
    {
        // 登陆注册路由
        path: '/login',
        element: <LoginAndRegister/>
    },
    {
        path: '/',
        element: (
            <AuthCom>
                <Layout/>
            </AuthCom>
        )
    }
]

export default routes