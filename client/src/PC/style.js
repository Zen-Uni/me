import styled from '@emotion/styled';

export const MainWraper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;

    & .left {
        height: 100%;
        width: 250px;
        background-color: black;
        position: fixed;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        & .item {
            color: #04b5bf;
            margin: 20px;
            font-size: 14px;
            font-weight: 600;
            &:hover {
                cursor: pointer;
            }
        }
    }

    & .right {
        position: absolute;
        height: 100%;
        left: 250px;
        right: 0px;
        background-color: #f0f0f0;
        box-sizing: border-box;
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 50px 30px;
    }
`

export const UserWrapper = styled.div`
    position: relative;
    width: 100%;
`

export const FutureWrapper = styled.div`
    position: relative;
    width: 100%;
`

export const CoordWrapper = styled.div`
    position: relative;
    width: 100%;
`

export const ModelWrapper = styled.div`
    position: relative;
    width: 100%;
`