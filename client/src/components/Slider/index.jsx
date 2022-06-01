/**
 * @description 侧边栏个人设置
 * @author Uni
 */

import { SideSheet, Toast } from '@douyinfe/semi-ui'
import { SlideWrapper } from './style'
import avatar from './image/avatar.jpg';
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, selectUserAvatar, updateAvatar } from '../../store/userReducer';
import { useRequest } from 'ahooks';
import { postAvatar } from '../../service';
import { useEffect } from 'react';
import { useLogOut } from '../../hooks/useLogCtl';
// import { Toast } from '@douyinfe/semi-ui'
export default function Slider({
    isSlide,
    onChange
}) {

    const { avatar_url, username, areaX, areaY } = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogOut = useLogOut();

    const { run, loading } = useRequest(postAvatar, {
        manual: true,
        onSuccess: ({ data, msg, code }) => {
           if (code) {
            Toast.success(msg);
            dispatch(updateAvatar(data.url));
            return;
           }
           Toast.warning(msg);
        },
        onError: ({response}) => {
            Toast.warning(response.data.msg)
        }
    })

    if (loading) {
        Toast.info('头像上传中...')
    }

    const handleUploadImg = e => {
        console.log(e.target.files[0])
        const file = new FormData()
        file.append('file', e.target.files[0])
        run(file)
    }


    return (
        <SideSheet 
            visible={isSlide} 
            onCancel={onChange} 
            placement="left" 
            width={200}
            keepDOM={true}
            closable={false}
        >
            <SlideWrapper>
                <div className='avatar'
                    style={{
                        backgroundImage: `url(${avatar_url ? avatar_url : avatar})`
                    }}
                >
                    <input 
                        type="file" 
                        className='upload'
                        onChange={e => handleUploadImg(e)}
                    />
                </div>
                <div className='headline'>
                    <i>{username} · ({areaX && areaX?.toFixed(2)}, {areaY && areaY?.toFixed(2)})</i>
                </div>
                <div className='item' onClick={() => Toast.error('此功能已下线')}>
                    账号设置
                </div>
                <div className='item' onClick={() => Toast.error('此功能已下线')}>
                    情绪监测
                </div>
                <div className='item'>
                    关于
                </div>
                <div className='quit' onClick={handleLogOut}>
                    退出登录
                </div>
            </SlideWrapper>
        </SideSheet>
    )
}