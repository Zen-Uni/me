/**
 * @description ToolBar 组件的全局样式
 * @author Uni
 */

import styled from "@emotion/styled";

export const ToolBarWrapper = styled.div`
    height: 60px;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 10px;
    box-sizing: border-box;
    font-size: 17px;
    font-weight: 300;



    // 取消键
    & .cancel {
        position: relative;
        height: 100%;
        width: 15%;
        width-min-width: 30px;
        display: flex;
        /* background-color: yellow; */
        align-items: center;
        justify-content: center;
        color: #aaa;
    }

    // 发布键
    & .post {
        position: relative;
        height: 80%;
        width: 65px;
        border-radius: 10px;
        display: flex;
        background-color: rgba(0, 0, 0, .9);
        align-items: center;
        justify-content: center;
        color: white;
    }

    // 输入框
    & .input_box {
        height: 100%;
        width: 60%;
        /* background-color: pink; */
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        outline: none;


        & .input {
            border: none;
            outline: none;
            background-color: white;
            & input {
                border: none;
                text-align: center;
                vertical-align: middle;
                background-color: white;
                font-size: 20px;
                font-weight: 600;
            }
        }
    }
`