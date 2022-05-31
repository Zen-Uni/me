/**
 * @description 好友列表
 * @author Uni
 */

import { FriendWrapper } from "./style";
import Avatar from './image/avatar.jpg';
import { useRequest } from "ahooks";
import { getFriendList } from "../../service";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateFriend } from "../../store/userReducer";



export default function Friend() {
    const [list, setList] = useState([]);
    const { run, loading } = useRequest(getFriendList, {
        manual: true,
        onSuccess: ({data}) => {
            setList(data.list);
        }
    });    
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        run();
    }, [])

    if (loading) {
        return null;
    }

    const handleClick = (item) => {
        dispatch(updateFriend({
            username: item.username,
            _id: item._id
        }))
        navigate('/friend');
    }

    return (
        <FriendWrapper>
            {
                list.map(item => (
                    <div className='item' onClick={() => handleClick(item)}>
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