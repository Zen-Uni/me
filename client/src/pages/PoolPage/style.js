/**
 * @description 信池主页样式
 * @author Uni
 */

import styled from "@emotion/styled";

export const PoolPageWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
    /* background-color: pink; */
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const PoolButtonWrapper = styled.div`
    position: relative;
    width: 70%;
    margin: 20px 0px;
    & .item {
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        border-radius: 7px;
        box-shadow: 0 0 3px rgba(0, 0, 0, .7);
    }

    & .public-item {
        background-color: black;
    }

    & .area-item {
        background-color: #00a8ab;
    }
`