/**
 * @description 信池按钮组件样式
 * @author Uni
 */

import styled from "@emotion/styled";

export const PoolWrapper = styled.div`
    float: right;
    margin: 0px 3px;
    & .button {
        height: 60px;
        width: 60px;
        border-radius: 60px;
        background-color: #88cfbf;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, .8);
        border: 1px solid rgba(255, 255, 255, .1);
    }
`