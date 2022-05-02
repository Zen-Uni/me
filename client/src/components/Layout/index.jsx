/**
 * @description 常用布局组件
 * @author Uni
 */

import { Outlet } from "react-router";
import ButtonSlot from "../ButtonSlot";
import Pool from "../Pool";
import Post from "../Post";
import { LayoutWrapper } from "./style";

export default function Layout() {
    return (
        <LayoutWrapper>
            <div>this is App Layout</div>
            <Outlet/>
            <ButtonSlot>
                <Post/>
                <Pool/>
            </ButtonSlot>
        </LayoutWrapper>
    )
}