/**
 * @description 首页
 * @author Uni
 */

import { useState } from "react";
import Friend from "./Friend";
import Header from "./Header";
import List from "./List";
import { MainWrapper } from "./style";

export default function Main() {
    const [change, setChange] = useState(false);
    return (
        <MainWrapper>
            <Header setChange={setChange}/>
            {
                change ? <Friend/> : <List/>
            }
        </MainWrapper>
    )
}