/**
 * @description 应用访问组件，用于媒体查询选择性挂载相关组件
 * @author Uni
 */

import { useMediaQuery } from "react-responsive"
import { Main, PCComponent } from "./Main"

export default function App() {
  // 移动端判定
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  // PC 端判定
  const isPC = useMediaQuery({
    query: '(min-width: 768px)'
  })

  return (
      <div>
        {
          isMobile && <Main/>
        }
        {
          isPC && <PCComponent/>
        }
      </div>
  )
}