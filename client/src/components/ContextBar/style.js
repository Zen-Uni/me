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
        & textarea {
            font-size: 20px;
            &::placeholder {
                font-size: 15px;
            }
        }
    }

`