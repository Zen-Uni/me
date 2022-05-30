/**
 * @description 信件内容的头部组成(头像、标题)
 * @author Uni
 */

import { LetterHeaderWrapper } from "./style";
import Avatar from './image/avatar.jpg';
import { useSelector } from "react-redux";
import { selectCurrentLetter } from "../../store/readReducer";

export default function LetterHeader() {

    const { avatar_url, title } = useSelector(selectCurrentLetter);

    return (
        <LetterHeaderWrapper>
            <div className='avatar'
                style={{
                    backgroundImage: `url(${avatar_url ? avatar_url : Avatar})`
                }}
            ></div>
            <div className='title'>{title}</div>
        </LetterHeaderWrapper>
    )
}
