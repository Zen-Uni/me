/**
 * @description Post 按钮组件样式
 * @author Uni
 */

import styled from '@emotion/styled'

export const PostWrapper = styled.div`
    float: right;
    margin: 0px 3px;
    & .button {
        height: 60px;
        width: 60px;
        border-radius: 60px;
        background-color: #d0cfd4;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, .8);
        border: 1px solid rgba(255, 255, 255, .1);
        display: flex;
        justify-content: center;
        align-items: center;
        & i {
            font-size: 25px;
            font-weight: 600;
            text-shadow: 0px 0px 3px rgba(0, 0, 0, .7);
        }
    }
`