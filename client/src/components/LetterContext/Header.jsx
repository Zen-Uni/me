/**
 * @description 信件内容的头部组成(头像、标题)
 * @author Uni
 */

import { LetterHeaderWrapper } from "./style";
import Avatar from './image/avatar.jpg';

export default function LetterHeader() {
    return (
        <LetterHeaderWrapper>
            <div className='avatar'
                style={{
                    backgroundImage: `url(${Avatar})`
                }}
            ></div>
            <div className='title'>123321</div>
        </LetterHeaderWrapper>
    )
}
