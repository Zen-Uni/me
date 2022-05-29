/**
 * @description Slide 组件的样式
 * @author Uni
 */

import styled from '@emotion/styled';


export const SlideWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    /* background-color: pink; */


    & .avatar {
        height: 85px;
        width: 85px;
        border-radius: 85px;
        background-position: center;
        background-repeat: none;
        background-size: cover;
        border-radius: 0px solid rgba(0, 0, 0, .15);
        box-shadow: 0 0 5px rgba(0, 0, 0, .6);
        margin: 10px auto;
        position: relative;
        overflow: hidden;

        & .upload {
            position: relative;
            height: 100%;
            width: 100%;
            opacity: 0;
            border-radius: 85px;
        }
    }

    & .headline {
        /* margin: 10px auto; */
        height: 50px;
        width: 100%;
        justify-content: center;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, .3);
        font-size: 10px;
        font-weight: 300;
        text-shadow: 0 0 3px rgba(0, 0, 0, .3);
    }

    .item {
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(0, 0, 0, .6);
        font-size: 18px;
        font-weight: 400;
        text-shadow: 0 0 3px rgba(0, 0, 0, .3);
    }

    .quit  {
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #f0a0a1;
        font-size: 18px;
        font-weight: 400;
        text-shadow: 0 0 3px rgba(0, 0, 0, .3);
    }
`