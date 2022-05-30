/**
 * @description 信件内容展示组件
 * @author Uni
 */

import Context from "./Context";
import Footer from "./Footer";
import LetterHeader from "./Header";
import { LetterContextWrapper } from "./style";

export default function LetterContext() {
    return (
        <LetterContextWrapper>
            <LetterHeader/>
            <Context/>
            <Footer/>
        </LetterContextWrapper>
    )
}