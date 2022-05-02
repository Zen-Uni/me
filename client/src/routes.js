/**
 * @description 路由配置
 * @author Uni
 */

import AuthCom from "./components/Auth"
import Layout from "./components/Layout"
import LoginAndRegister from "./pages/LoginAndRegister"
import Main from "./pages/Main/index.jsx"
import PostPage from "./pages/PostPage"

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
        ),
        children: [
            {
                index: true,
                element: <Main/>
            }
        ]
    },
    {
        path: '/post',
        element: (
            <AuthCom>
                <PostPage/>
            </AuthCom>
        )
    }
]

export default routes