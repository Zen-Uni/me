import Coord from "./Coord";
import Future from "./Future";
import Main from "./Main";
import Model from "./Model";
import User from "./User";



const pcroutes = [
    {
        // 登陆注册路由
        path: '/',
        element: <Main/>,
        children: [
            {
                index: true,
                element: <User/>
            }
        ]
    },
    {
        path: '/future',
        element: <Main/>,
        children: [
            {
                index: true,
                element: <Future/>
            }
        ]
    },
    {
        path: '/coord',
        element: <Main/>,
        children: [
            {
                index: true,
                element: <Coord/>
            }
        ]
    },
    {
        path: '/model',
        element: <Main/>,
        children: [
            {
                index: true,
                element: <Model/>
            }
        ]
    }
];

export default pcroutes;