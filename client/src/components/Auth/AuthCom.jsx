/**
 * @description 根据权限控制路由
 * @author Uni
 */


import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { logIn, logOut } from "../../store/authReducer"
import Loading from "../Loading"
import { useRequest } from 'ahooks'
import { authReq } from '../../service'
import { configReq } from "../../utils/token"
import { config, selectUser } from "../../store/userReducer"



// 控制变量判断
export default function AuthCom({children}) {
    // const auth = useSelector(state => state.auth.value)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const [loading, setLoading] = useState(auth)

    // useEffect(() => {
    //     async function fetch() {
    //         const res = await new Promise((res) => {
    //             setTimeout(()=> {
    //                 res(false)
    //                 res(true)
    //             }, 3000)
    //         })

    //         if (res) {
    //             dispatch(logIn())
    //         } else {
    //             dispatch(logOut())
    //             navigate('/login')
    //         }
    //     }

    //     fetch()
    // }, [])

    // if (!auth) {
    //     return (
    //         <Loading/>
    //     )
    // }

    useEffect(() => {
        console.log(user)
    })

    const { loading, run } = useRequest(authReq, {
        manual: true,
        onSuccess: ({ data }) => {
            // console.log('res --- ', res)
            // console.log(data)
            dispatch(config(data))
        },
        onError: (err) => {
            dispatch(logOut())
            navigate('/login')
        }
    })
    // 注册 token 到请求中
    configReq()
    useEffect(run, [])

    if (loading) {
        return (
            <Loading />
        )
    } 

    return children
}