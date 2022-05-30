/**
 * @description 读信页面的 Footer 组件
 * @author Uni
 */

import { FooterWrapper } from "./style";

export default function Footer() {
    return (
        <FooterWrapper>
            <WriteBack/>
            <NextLetter/>
        </FooterWrapper>
    )
}

const WriteBack = () => {
    return (
        <div className='item'>回信</div>
    )
}

const NextLetter = () => {
    return (
        <div className='item'>下一篇</div>
    )
}