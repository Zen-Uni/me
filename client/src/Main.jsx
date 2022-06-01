/**
 * @description 移动端的挂载组件
 * @author Uni
 */

import { useLayoutEffect } from "react"
import { BrowserRouter, Routes } from "react-router-dom"
import routes from "./routes"
import renderRouter from "./utils/renderRouter"
import pcroutes from './PC/pcroutes';




// 移动端挂载组件
export function Main() {
    useLayoutEffect(() => {
        async function fetch() {
            const res = await new Promise((res) => {
                setTimeout(() => {
                    res(1)
                }, 3000)
            })
            console.log(res)
        }

        fetch()
    })
    return (
        <BrowserRouter>
            <Routes>
                {
                    renderRouter(routes)
                }
            </Routes>
        </BrowserRouter>
    )
}



// PC 端挂载组件
export function PCComponent() {
    return (
        <BrowserRouter>
            <Routes>
                {
                    renderRouter(pcroutes)
                }
            </Routes>
        </BrowserRouter>
    )
}