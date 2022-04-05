/**
 * @description 配置式渲染路由的工具
 * @author Uni
 */

import { Route } from 'react-router-dom'

const renderRouter = (routes) => {
    return routes.map(item => {
        return (
            <Route path={item.path} element={item.element} index={item.index} key={item.path || "" + item.element}> 
                {
                    
                    item.children && renderRouter(item.children)
                }
            </Route>
        )
    })
}

export default renderRouter