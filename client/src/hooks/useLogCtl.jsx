/**
 * @description 退出登录（打不了，夏啵）
 * @author Uni
 */

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { deleteToken } from '../utils/token';

export const useLogOut = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    return () => {
        deleteToken();
        // navigate('/login');
        window.location.href = '/login'
    }
}