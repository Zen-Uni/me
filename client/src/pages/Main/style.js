/**
 * @description 主页样式
 * @author Uni
 */

import styled from '@emotion/styled';

export const MainWrapper = styled.div`
    
`;

// Header 样式
export const HeaderWrapper = styled.div`
    height: 65px;
    width: 100%;
    /* background-color: pink; */

    display: flex;
    align-items: center;
    justify-content: space-around;

    box-shadow: 0px 1px 3px rgba(0, 0, 0, .5);

    & .menu {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        & i {
            font-size: 25px;
            color: rgba(0, 0, 0, .5);
        }

    }

    & .option {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 300;
        // 选择按钮的公共样式
        & .item {
            margin: 0px 10px;
            z-index: 10;
        }

        // 选择框样式
        & .select-item {
            position: absolute;
            left: 0px;
            height: 40px;
            width: 60px;
            background-color: rgba(0, 0, 0, .8);
            border-radius: 10px;
            transition: all .5s ease;
        }

        & .selected-item {
            left: 60px;
        }

        // 被选中时的样式
        & .selected {
            color: white;
        }

        
    }

    // 状态切换按钮样式
    .status {
        width: 60px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        & i {
            font-size: 30px;
        }

        // 积极
        & .positive {
           /* color: #e8e679; */
           color: #eeca8e;
        }
        // 消极
        & .negative {
            /* color: #00c3ba; */
            color: #3785a1;
        }
    }
`

// List 样式
export const ListWrapper = styled.div`
    position: absolute;
    top: 65px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: scroll;
`

// Friend 样式
export const FriendWrapper = styled.div`
    position: absolute;
    top: 65px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: scroll;

    & .item {
        height: 110px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0px 10px 0px 20px;
        position: relative;


        &::after {
            content: ' ';
            display: block;
            height: 1px;
            width: 320px;
            background-color: rgba(0, 0, 0, .1);
            position: absolute;
            bottom: 0px;
            left: 50%;
            margin-left: -160px;
        }

        & .avatar {
            height: 80px;
            width: 80px;
            border-radius: 80px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            box-shadow: 0px 0px 3px rgba(0, 0, 0, .5);
        }

        & .username {
            height: 80px;
            width: 150px;
            /* background-color: white; */
            display: flex;
            align-items: center;
            font-size: 20px;
            font-weight: 300;
            text-shadow: 0px 0px 3px rgba(0, 0, 0, .7);
        }

        & .coord {
            height: 80px;
            width: 90px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: 600;
            text-shadow: 0px 0px 3px rgba(0, 0, 0, .5);

        }
    }

`