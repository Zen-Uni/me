/**
 * @description List 相关组件的样式
 * @author Uni
 */

import styled from '@emotion/styled';

export const LetterListWrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
    padding: 10px 30px;
    /* background-color: yellow; */
`

export const ListItemWrapper = styled.div`
    position: relative;
    height: 80px;
    width: 90%;
    /* background-color: pink; */
    margin: 20px auto;
    border-radius: 10px;
    /* border: 1px solid rgba(0, 0, 0, .1); */
    box-shadow: 0px 0px 3px rgba(0, 0, 0, .6);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;

    // 信件类型 - 颜色表明
    & .color-type {
        height: 100%;
        width: 10px;
        position: absolute;
        left: 0;
    }
    

    // 信件概览 - 标题、来源
    & .msg-box {
        height: 100%;
        width: 80%;
        position: relative;
        box-sizing: border-box;
        padding-left: 20px;
        & .title {
            position: relative;
            font-size: 24px;
            height: 50px;
            width: 100%;
            line-height: 50px;
            color: rgba(0, 0, 0, .7);
            font-weight: 400;
            white-space: nowrap;
            /*溢出部分文字隐藏*/
            overflow: hidden;
            /*溢出部分省略号处理*/
            text-overflow: ellipsis !important;
        }

        & .description {
            height: 30px;
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            font-size: 10px;
            color: rgba(0, 0, 0, .3);
        }
    }
`