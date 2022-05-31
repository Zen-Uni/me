/**
 * @description 信池页相关入口插槽
 * @author Uni
 */

import { PoolSelectWrapper } from "./style";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { MODE_TYPE, selectPost } from "../../store/postReducer";
import { useRequest } from 'ahooks';
import { getPoolLetter } from "../../service";
import { Toast } from "@douyinfe/semi-ui";
import { selectLetterList, setCurrent, setList } from "../../store/readReducer";

export default function PoolSelect() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mode = useSelector(selectPost);
    const list = useSelector(selectLetterList);
    const { run, loading } = useRequest(getPoolLetter, {
        manual: true,
        onSuccess: ({ data }) => {
            const { list } = data;
            console.log('list ---- ', list);
            dispatch(setList(list));
            dispatch(setCurrent());
            navigate('/letter');
        },
        onError: () => {
            Toast.warning('信件获取失败');
        }
    });
    const handleWander = () => {
        const _mode = 'wander';
        if (mode === MODE_TYPE.public) {
            run({
                type: 'public',
                mode: _mode
            });
            return;
        }

        if (mode === MODE_TYPE.area) {
            if (list.length) {
                dispatch(setCurrent());
                navigate('/letter');
                return;
            }
            Toast.warning('当前区域没有信件了')
            return;
        }
        Toast.warning('鉴权失败')
    }

    const handlePost = () => {
        navigate('/post');
    }

    return (
        <PoolSelectWrapper>
            <div 
                className='begin'
                onClick={handleWander}
            >开始漫游</div>
            <div className='category'>
                <div className="positive">积极信件</div>
                <div className="negative">消极信件</div>
            </div>
            <div className='send' onClick={handlePost}>投递信件</div>
        </PoolSelectWrapper>
    )
}