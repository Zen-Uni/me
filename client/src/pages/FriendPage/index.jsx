/**
 * @description 信友界面
 * @author Uni
 */

import { useRequest } from "ahooks";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CoordBar from "../../components/CoordBar";
import RollBack from "../../components/RollBack";
import { getFriendLetter } from "../../service";
import { selectFriend } from "../../store/userReducer";
import { FriendPageWrapper } from "./style";

export default function FriendPage() {
    const friend = useSelector(selectFriend);
    const [list, setList] = useState([]);
    const { run, loading } = useRequest(getFriendLetter, {
        manual: true,
        onSuccess: ({data}) => {
            setList(data.list)
        }, 
        onError: () => {

        }
    });

    useEffect(() => {
        run({
            friend_id: friend._id
        });
    }, [])


    return (
        <FriendPageWrapper>
            <div className='header-layer'></div>
            <RollBack/>
            <CoordBar username={friend.username}/>
            {
                loading ? null
                : 
                list.map(item => {
                    const date = new Date(item.createdAt);
                    const sendTime = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
                    return (
                        <div className='letter-item'>
                            <div className="header">
                                {item.letter_id.title}
                            </div>
                            <div className="context">
                                {item.letter_id.context}
                            </div>
                            <div className="footer">
                                <div className='by'>BY</div>
                                <div className='date'>{item.owner_id.username} · {sendTime}</div>
                            </div>
                        </div>
                    )
                })
            }
        </FriendPageWrapper>
    )
}