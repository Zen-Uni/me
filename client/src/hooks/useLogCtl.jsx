/**
 * @description 退出登录（打不了，夏啵）
 * @author Uni
 */

import { useNavigate } from 'react-router-dom'
import { deleteToken } from '../utils/token';

export const useLogOut = () => {
    const navigate = useNavigate();
    return () => {
        deleteToken();
        navigate('/login');
    }
}