/**
 * @description 页面组件样式
 * @author Uni
 */

import styled from '@emotion/styled';


export const LetterContextWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 7px;
    overflow-x: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
    padding: 80px 30px 40px 30px;
`

export const LetterHeaderWrapper = styled.div`
    position: relative;
    height: 100px;
    width: 100%;
    background-color: rgba(255, 255, 255, .4);
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, .2);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, .5);
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    & .avatar {
        height: 80px;
        width: 80px;
        border-radius: 80px;
        border: 1px solid rgba(0, 0, 0, .2);
        position: absolute;
        left: 50%;
        margin-left: -40px;
        top: -60px;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, .5);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`

export const ContextWrapper = styled.div`
    position: relative;
    min-height: 350px;
    width: 100%;
    background-color: rgba(255, 255, 255, .4);
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, .2);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, .5);
    margin-top: 30px;
    box-sizing: border-box;
    padding: 10px 10px;
    line-height: 2;
    font-size: 16px;
    font-weight: 300;

`

export const FooterWrapper = styled.div`
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 35px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    background-color: #f0f0f0;

    & .item {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 3px;
        color: rgba(0, 0, 0, .3);
        font-size: 18px;
        text-shadow: 0px 0px 3px rgba(0, 0, 0, .1);
    }
`

// position: relative;
// height: 100%;
// width: 100%;
// background-color: rgba(255, 255, 255, .4);
// border-radius: 10px;
// border: 1px solid rgba(0, 0, 0, .2);
// box-shadow: 0px 0px 2px rgba(0, 0, 0, .5);