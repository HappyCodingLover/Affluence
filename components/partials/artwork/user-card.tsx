// Import Custom Component
import ALink from '../../common/ALink';
import BgImage from '../../common/BgImage';
import Tippy from '../../common/Tippy';

import UserPopupCard from './user-popup-card';

// Import Settings

export default function UserCard( { user } ) {
    return (
        <Tippy tippyRef={(<UserPopupCard user={user}/>)} className="d-flex py-3 pl-3 pr-5">
            <ALink href={`/artwork/${user.slug}`}>
                <div className="d-flex align-items-center">
                    <BgImage url={user.avatar} color={user.color} bgSize="cover" position="center center" size="small" />
                    <div>@{user.slug}</div>
                </div>
            </ALink>
        </Tippy>
    );
}