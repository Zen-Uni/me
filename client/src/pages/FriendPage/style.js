/**
 * @description 信友界面的样式
 * @author Uni
 */

import styled from '@emotion/styled';

export const FriendPageWrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #f0f0f0;
    box-sizing: border-box;
    padding-top: 90px;
    & .header-layer {
        position: fixed;
        height: 65px;
        width: 100%;
        background-color: #f0f0f0;
        z-index: 100;
        top: 0px;
    }
    overflow: scroll;

    & .letter-item {
        /* height: 300px; */
        width: 90%;
        position: relative;
        border-radius: 3px;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, .7);
        border: 1px solid rgba(0, 0, 0, .3);
        margin: 10px auto;

        & .header {
            height: 60px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: 300;
            text-shadow: 0px 0px 3px rgba(0, 0, 0, .7);
        }

        & .context {
            width: 100%;
            line-height: 2;
            padding: 0px 20px;
            font-weight: 300;
            box-sizing: border-box;
        }

        & .footer {
            margin: 30px 0px;
            width: 100%;
            /* height: 60px; */
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            & .by {
                font-size: 12px;
                letter-spacing: 3px;
                color: rgba(0, 0, 0, .5);
                font-weight: 800;
            }
            & .date {
                margin-top: 10px;
                font-size: 14px;
                font-weight: 100;
            }
        }
    }
`

export const WriteWrapper = styled.div`
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 20px;
    right: 7px;
    z-index: 100;
    & i{
        font-size: 18px;
        font-weight: 600;
        text-shadow: 0px 0px 3px rgba(0, 0, 0, .3);
    }
`