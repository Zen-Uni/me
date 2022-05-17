/**
 * @description 首页顶部
 * @author Uni
 */

import { useState } from "react";
import Slider from "../../components/Slider";
import { HeaderWrapper } from "./style";


export default function Header() {

    const [isSlide, setIsSlide] = useState(false);

    const handleCancelSlide = () => {
        setIsSlide(false)
    }

    return (
        <HeaderWrapper>
            <div className='menu' onClick={() => setIsSlide(true)}>
                <i className='iconfont icon-liebiao'></i>
            </div>
            <div className='option'>
                <div className='box item'>收信</div>
                <div className='friend item'>信友</div>
            </div>
            <div>123</div>
            <Slider isSlide={isSlide} onChange={handleCancelSlide}/>
        </HeaderWrapper>
    )
}