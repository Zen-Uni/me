/**
 * @description Loading 组件的样式
 * @author Uni
 */

import styled from '@emotion/styled'

export const LoadingWrapper = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:100;

    & .semi-spin-wrapper {
        color: #78e6d2;
    }
`