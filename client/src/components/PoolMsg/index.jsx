/**
 * @description 信池信息展示组件（坐标、信池信件信息）
 * @author Uni
 */

import { useRequest } from "ahooks";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAreaLetterNum, getPublicLetterNum } from "../../service";
import { setList } from "../../store/readReducer";
import { selectUser } from "../../store/userReducer";
import { PoolMsgWrapper } from "./style";

// 各个模块的组件
const CoordMsg = () => {
    const { areaX, areaY } = useSelector(selectUser)

    return (
        <i>( {areaX.toFixed(2)}, {areaY.toFixed(2)} )</i>
    )
}

const PublicPoolMsg = () => {
    const [letterNum, setLetterNum] = useState('0')
    const { loading, run } = useRequest(getPublicLetterNum, {
        manual: true,
        onSuccess: ({ data }) => {
            setLetterNum(data.data)
            console.log(data)
        }
    })

    useEffect(() => {
        run()
    }, [])  

    if (loading) {
        return null
    }

    return (
        <i>{letterNum} 篇</i>
    )
}

const AreaPoolMsg = () => {
    const [letterNum, setLetterNum] = useState('0');
    const { areaX, areaY } = useSelector(selectUser);
    const dispatch = useDispatch();
    const { loading, run } = useRequest(getAreaLetterNum, {
        manual: true,
        onSuccess: ({ data }) => {
            setLetterNum(data.data?.length || '0');
            dispatch(setList(data.data));
            console.log(data?.data);
        }
    })

    useEffect(() => {
        run({
            areaX,
            areaY
        })
    }, [])  

    if (loading) {
        return null
    }

    return (
        <i>{letterNum} 篇</i>
    )
}


const POOLMSG_MAP = {
    coord: {
        title: '当前虚拟坐标',
        service: <CoordMsg/>
    },
    public_pool: {
        title: '当前信池中的信件数',
        service: <PublicPoolMsg/>
    },
    area_pool: {
        title: '当前信池中的信件数',
        service: <AreaPoolMsg/>
    }
}

export default function PoolMsg({ type }) {
    const { title, service } = POOLMSG_MAP[type];

    return (
        <PoolMsgWrapper>
            <div className='title msg-item'>
                {title}
            </div>
            <div className='context msg-item'>
                {service}
            </div>
        </PoolMsgWrapper>
    )
}