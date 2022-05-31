/**
 * @description 好友列表
 * @author Uni
 */

import { FriendWrapper } from "./style";
import Avatar from './image/avatar.jpg';
import { useRequest } from "ahooks";
import { getFriendList } from "../../service";
import { useEffect, useState } from "react";



export default function Friend() {
    const [list, setList] = useState([]);
    const { run, loading } = useRequest(getFriendList, {
        manual: true,
        onSuccess: ({data}) => {
            setList(data.list);
        }
    });    

    useEffect(() => {
        run();
    }, [])

    if (loading) {
        return null;
    }

    const handleClick = () => {
        
    }

    return (
        <FriendWrapper>
            {
                list.map(item => (
                    <div className='item' onClick={handleClick}>
                        <div 
                            className='avatar'
                            style={{
                                backgroundImage: `url(${item.avatar_url ? item.avatar_url : Avatar})`
                            }}
                        ></div>
                        <div className='username'>{item.username}</div>
                        <div className='coord'>({item.areaX.toFixed(2)}, {item.areaY.toFixed(2)})</div>
                    </div>
                ))
            }
        </FriendWrapper>
    )
}