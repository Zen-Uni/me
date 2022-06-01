
import { Outlet, useNavigate } from "react-router"
import { MainWraper } from "./style"



export default function Main() {
    const navigate = useNavigate();
    const handleClick = (route) => {
        navigate(route);
    }

    return (
        <MainWraper>
            <div className='left'>
                <div className="item" onClick={() => handleClick('/')}>用户及信件</div>
                <div className="item" onClick={() => handleClick('/model')}>模型</div>
                <div className="item" onClick={() => handleClick('/coord')}>虚拟分区</div>
                <div className="item" onClick={() => handleClick('/future')}>展望</div>
            </div>
            <div className='right'>
                <Outlet/>
            </div>
        </MainWraper>
    )
}