/**
 * @description 回退按钮样式
 * @author Uni
 */

import styled from "@emotion/styled";

export const RollBackWrapper = styled.div`
    height: 50px;
    width: 50px;
    position: fixed;
    top: 15px;
    left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    & i {
        font-size: 30px;
        color: #ccc;
    }
`