/**
 * @description 根据权限控制路由
 * @author Uni
 */

import { Spin } from "@douyinfe/semi-ui"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { logIn, logOut } from "../store/authReducer"
import Loading from "./Loading"

// 控制变量判断
export default function AuthCom({children}) {
    const auth = useSelector(state => state.auth.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const [loading, setLoading] = useState(auth)

    useEffect(() => {
        async function fetch() {
            const res = await new Promise((res) => {
                setTimeout(()=> {
                    res(false)
                    res(true)
                }, 3000)
            })

            if (res) {
                dispatch(logIn())
            } else {
                dispatch(logOut())
                navigate('/login')
            }
        }

        fetch()
    }, [])

    if (!auth) {
        return (
            // <Spin
            //     spinning={!auth}
            // />
            <Loading/>
        )
    }


    return children
}