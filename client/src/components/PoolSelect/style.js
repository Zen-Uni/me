/**
 * @description PoolSelect 样式
 * @author Uni
 */

import styled from "@emotion/styled";

export const PoolSelectWrapper = styled.div`
    width: 70%;
    position: relative;
    & .begin {
        height: 50px;
        width: 100%;
        background-color: rgba(0, 0, 0, .8);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 3px;
        font-size: 20px;
        border-radius: 15px;
        font-weight: 300;
        margin: 20px 0;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, .4);

    }
    & .category {
        height: 45px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        
        
        .positive {
            height: 100%;
            width: 45%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f9c883;
            /* background-color: #f79f36; */
            color: rgba(255, 255, 255, .8);
            border-radius: 5px;
            box-shadow: 0 0 3px rgba(0, 0, 0, .4);
        }

        .negative {
            height: 100%;
            width: 45%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #3aacb6;
            color: rgba(255, 255, 255, .8);
            box-shadow: 0 0 3px rgba(0, 0, 0, .4);
            border-radius: 5px;
        }
    }

    .send {
        height: 50px;
        width: 100%;
        background-color: white;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, .4);
        color: rgba(0, 0, 0, .8);
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 3px;
        font-size: 20px;
        border-radius: 15px;
        font-weight: 300;
        margin: 20px 0;
    }
`