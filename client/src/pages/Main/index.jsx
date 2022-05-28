/**
 * @description 首页
 * @author Uni
 */

import Header from "./Header";
import List from "./List";
import { MainWrapper } from "./style";

export default function Main() {
    return (
        <MainWrapper>
            <Header/>
            <List/>
        </MainWrapper>
    )
}