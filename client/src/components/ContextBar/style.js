/**
 * @description 信件内容组件样式
 * @author Uni
 */

import styled from "@emotion/styled";

export const ContextBarWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 60px;
    bottom: 0;
    padding: 10px;
    overflow: hidden;

    & .textarea {

        height: 100%;
        width: 100%;
        background-color: #fff;
        outline: none;
        border: none;
        padding: 20px 0;
        & textarea {
            line-height: 2;
            height: 100%;
            width: 100%;
            font-size: 20px;
            &::placeholder {
                line-height: 2.6;
                font-size: 15px;
            }
        }
    }

`