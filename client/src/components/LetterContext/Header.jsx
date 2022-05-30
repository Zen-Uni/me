/**
 * @description 信件内容的头部组成(头像、标题)
 * @author Uni
 */

import { LetterHeaderWrapper } from "./style";
import Avatar from './image/avatar.jpg';
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userReducer";

export default function LetterHeader() {

    const { avatar_url } = useSelector(selectUser);

    return (
        <LetterHeaderWrapper>
            <div className='avatar'
                style={{
                    backgroundImage: `url(${avatar_url ? avatar_url : Avatar})`
                }}
            ></div>
            <div className='title'>123321</div>
        </LetterHeaderWrapper>
    )
}
