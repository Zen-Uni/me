/**
 * @description 信箱列表
 */

import { useRequest } from "ahooks"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { getSelfList } from "../../service"
import { setList, setSelfRead } from "../../store/readReducer"
import { selectUser } from "../../store/userReducer"
import { LetterListWrapper, ListItemWrapper } from "./style"

// mock 数据
/** 
 * 
 */
const mock = [
    {
        color: '#70acc4',
        type: '来自公共信池',
        title: '今天不开心...',
        sendTime: '5, 10, 2022',
        getTime: '2022-5-17'
    },
    {
        color: '#f2d0cf',
        type: '来自区域信池的信',
        title: '今天很开心!!!',
        sendTime: '5, 10, 2022',
        getTime: '2022-5-15'
    },
    {
        color: '#88cfbf',
        type: '未来的你，请查收',
        title: '呜呜呜现在才下班，上班好累',
        sendTime: '5, 7, 2022',
        getTime: '2022-5-14'
    },
    {
        color: '#88cfbf',
        type: '未来的你，请查收',
        title: '请加油！',
        sendTime: '5, 6, 2022',
        getTime: '2022-5-14'
    },
    {
        color: '#f2d0cf',
        type: '给过去的自己回封信吧',
        title: '报告！要开心！',
        sendTime: '5, 9, 2022',
        getTime: '2022-5-11'
    },
    {
        color: '#70acc4',
        type: '给过去的自己回封信吧',
        title: '你真的超级超级超超棒的！',
        sendTime: '5, 1, 2022',
        getTime: '2022-5-7'
    },
    {
        color: '#88cfbf',
        type: '未来的你，请查收',
        title: '你真的超级超级超超棒的！',
        sendTime: '5, 1, 2022',
        getTime: '2022-5-7'
    },
    {
        color: '#70acc4',
        type: '给过去的自己回封信吧',
        title: '那段时间，确实很难熬，但你真的很棒了',
        sendTime: '5, 1, 2022',
        getTime: '2022-5-7'
    },
]

// const fastMock = [1, 2 ,3 ,4 ,6,5,7, 7, 7, 7, 7 ,7 ,7,7];
const text_type_date = '给过去的自己回封信吧';
const text_type_status = '未来的你，请查收';

const ListItem = ({item}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const date = new Date(item.createdAt);
    const sendTime = `${date.getDate()}, ${date.getMonth()}, ${date.getFullYear()}`;
    const data = {
        title: item.title,
        context: item.context,
        self: true,
        areaX: item.owner.areaX,
        areaY: item.owner.areaY,
        avatar_url: item.owner.avatar_url
    }
    const handleClick = (data) => {
        console.log(123)
        dispatch(setSelfRead(data));
        navigate('/letter')
    }
    return (
        <ListItemWrapper onClick={() => handleClick(data)}>
            <div className='color-type'
                style={{
                    backgroundColor: item.mode ?'#70acc4' : '#88cfbf',
                    opacity: '.8'
                }}
            ></div>
            <div className='msg-box'>
                <div className='title'>
                  {item.title}
                </div>
                <div className='description'>
                    {item.mode ? text_type_date : text_type_status + ' ··· ' + sendTime}
                </div>
            </div>
            <div className='time-box'></div>
        </ListItemWrapper>
    )
}

export default function LetterList() {
    const [list, setList] = useState([]);
    const { run, loading } = useRequest(getSelfList, {
        manual: true,
        onSuccess: ({ data }) => {
            console.log(data);
            setList(data.list);
        }
    })

    useEffect(() => {
        run();
    }, [])

 

    return (
        <LetterListWrapper>
          {
            list.map(item => {
                

                return <ListItem item={item} key={item._id} />
            })
          }
        </LetterListWrapper>
    )
}

