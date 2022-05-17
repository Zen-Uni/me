/**
 * @description 主页样式
 * @author Uni
 */

import styled from '@emotion/styled';

export const MainWrapper = styled.div`
    
`;


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
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 300;
        // 选择按钮的公共样式
        & .item {
            margin: 0px 10px;
        }
    }
`