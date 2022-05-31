/**
 * @description 路由配置
 * @author Uni
 */

import AuthCom from "./components/Auth"
import Layout from "./components/Layout"
import LoginAndRegister from "./pages/LoginAndRegister"
import Main from "./pages/Main/index.jsx"
import PoolPage from "./pages/PoolPage"
import PostPage from "./pages/PostPage"
import AreaPool from './pages/PoolPage/AreaPool'
import PublicPool from "./pages/PoolPage/PublicPool"
import LetterPage from "./pages/LetterPage"
import FriendPage from "./pages/FriendPage"

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
    },
    {
        path: '/pool',
        element: (
            <AuthCom>
                <PoolPage/>
            </AuthCom>
        )
    },
    {
        path: '/pool/area',
        element: (
            <AuthCom>
                <AreaPool/>
            </AuthCom>
        )
    },
    {
        path: '/pool/public',
        element: (
            <AuthCom>
                <PublicPool/>
            </AuthCom>
        )
    },
    {
        path: '/letter',
        element: (
            <AuthCom>
                <LetterPage/>
            </AuthCom>
        )
    },
    {
        path: '/friend',
        element: (
            <AuthCom>
                <FriendPage/>
            </AuthCom>
        )
    }
]

export default routes