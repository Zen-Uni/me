/**
 * @description 读信页面的 Footer 组件
 * @author Uni
 */

import { Toast } from "@douyinfe/semi-ui";
import { useRequest } from "ahooks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { postCheckReply } from "../../service";
import { MODE_TYPE, updateMode } from "../../store/postReducer";
import { selectCurrentLetter, selectLetterList, setCurrent } from "../../store/readReducer";
import { FooterWrapper } from "./style";

export default function Footer() {
    const { self } = useSelector(selectCurrentLetter);
    if (self) {
        return null;
    }    

    return (
        <FooterWrapper>
            <WriteBack/>
            <NextLetter/>
        </FooterWrapper>
    )
}

const WriteBack = () => {

    const { owner } = useSelector(selectCurrentLetter);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { run, loading } = useRequest(postCheckReply, {
        manual: true,
        onSuccess: ({data, msg, code}) => {
            console.log(data);
            if (code === 0) {
                Toast.warning(msg);
                return;
            }
            if (data.replyed === 1) {
                Toast.warning(msg);
                return;
            }

            dispatch(updateMode(MODE_TYPE.reply));
            navigate('/post');
        },
        onError: () => {
            Toast.error('回信功能出现问题');
        }
    });

    const handleReply = () => {
        run({
            owner_id: owner
        })
    }

    return (
        <div className='item'
            onClick={handleReply}
        >回信</div>
    )
}

const NextLetter = () => {
    const list = useSelector(selectLetterList);
    const dispatch = useDispatch();
    const handleNext = () => {
        if (list.length === 0) {
            return Toast.warning('已经没有新的信件啦');
        }
        dispatch(setCurrent());
    }

    return (
        <div className='item' onClick={handleNext}>下一篇</div>
    )
}