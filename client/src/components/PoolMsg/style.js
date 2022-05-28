/**
 * @description 信池信息组件的样式
 * @author Uni
 */

import styled from '@emotion/styled'


export const PoolMsgWrapper = styled.div`
    /* height: 80px; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0px 0px 30px 0px;
    & .msg-item {
        margin: 7px 0px;
    }
    & .title {
        font-size: 7px;
        font-weight: 200;
        text-shadow: 0px 0px 3px rgba(0, 0, 0, .7);
    }
    & .context {
        font-size: 14px;
        font-weight: 600;
        text-shadow: 0px 0px 3px rgba(0, 0, 0, .7);
    }
`