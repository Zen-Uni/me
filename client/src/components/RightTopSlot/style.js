/**
 * @description 右上角工具栏样式
 * @author Uni
 */

import styled from '@emotion/styled';


export const RightTopSlotWrappers = styled.div`
    position: fixed;
    z-index: 100;
    top: 20px;
    right: 7px;
    height: 40px;
    width: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
    & .button {
        margin-left: 5px;
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        & i {
            font-size: 18px;
            font-weight: 600;
            text-shadow: 0px 0px 3px rgba(0, 0, 0, .3);
        }

        & .bad-report {
            color: pink
        }

        & .feed-back {
            color: #43b3b3;
        }
    }
`

export const FeedButtonWrapper = styled.div`
     & .feed-button {    
        height: 50px;
        width: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

