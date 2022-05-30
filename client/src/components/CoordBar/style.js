/**
 * @description 顶部坐标栏样式
 * @author Uni
 */

import styled from '@emotion/styled';


export const CoordBarWrapper = styled.div`
    position: fixed;
    margin-left: -100px;
    left: 50%;
    top: 15px;
    height: 50px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    font-style: 12px;
    font-weight: 200;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, .7);
`