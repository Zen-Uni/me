/**
 * @description 首页顶部
 * @author Uni
 */

import { Toast } from "@douyinfe/semi-ui";
import { useRequest } from "ahooks";
import { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import { postChangeStatus } from "../../service";
import { HeaderWrapper } from "./style";


export default function Header({ setChange }) {

    const [isSlide, setIsSlide] = useState(false);

    const [selected, setSelected] = useState(true);

    const [status, setStatus] = useState(true);

    const { run } = useRequest(postChangeStatus, {
        manual: true,
        onSuccess: ({code, msg}) => {
            if (code === 1) {
                // Toast.success(msg);
            } else {
                Toast.warninga(msg);
            }
        }
    })

    const handleCancelSlide = () => {
        setIsSlide(false)
    }


    useEffect(() => {
        setChange(!selected);
    }, [selected])

    useEffect(() => {
        run({
            status
        })
    }, [status]);

    return (
        <HeaderWrapper>
            <div className='menu' onClick={() => setIsSlide(true)}>
                <i className='iconfont icon-liebiao'></i>
            </div>
            <div className='option'>
                <div className={selected ? 'select-item' : 'select-item selected-item'}></div>
                <div className={selected ? 'selected item'  : 'item'} onClick={() => setSelected(true)}>收信</div>
                <div className={selected ? 'item' : 'selected item'} onClick={() => setSelected(false)}>信友</div>
            </div>
            <div className='status'>
                {
                    status ? 
                    <i className='iconfont icon-taiyang positive' onClick={() => setStatus(false)}></i> :
                    <i className='iconfont icon-yueliang negative' onClick={() => setStatus(true)}></i>
                }
            </div>
            <Slider isSlide={isSlide} onChange={handleCancelSlide}/>
        </HeaderWrapper>
    )
}