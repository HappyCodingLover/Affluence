// Import Custom Component
import ALink from '../../common/ALink';
import BgImage from '../../common/BgImage';

// Import Settings

import { getUserFollowingsWithObject } from '../../../utils';

export default function UserPopupCard( { user } ) {
    user['following_users'] = []
    user['following_users'] = getUserFollowingsWithObject( user )

    return (
        <div className="user-card">
            <div className="user-card-top">
                <div className="position-relative">
                    <div className="">
                        <ALink href={`/profile/${user.slug}`}>
                            <BgImage url={user.avatar} color={user.color} bgSize="cover" position="center center" size="mediumn" />
                        </ALink>
                        <div className="pt-3">
                            <h2 className="">{user.name}</h2>
                            <h4 className="gradient-title">@{user.slug}</h4>
                        </div>
                    </div>
                    <div className="btn-action">
                        <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent text-light-hover bg-dark-hover">
                            Follow
                        </button>
                    </div>
                </div>
                <div className="pt-1">
                    <h5 className="mb-0 mr-3">{user.sub_title}</h5>
                    <div className="d-flex align-items-center py-3">
                        <h5 className="mb-0 mr-3">Followed by</h5>
                        <div className="d-flex users-list">
                            {user.following_users.map((following, index) => (
                                <ALink href={`/profile/${following.slug}`} key={"" + index}>
                                    <BgImage url={following.avatar} color={user.color} bgSize="cover" position="center center" size="ssmall" />
                                </ALink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-card-bottom">
                <ALink href={`/profile/${user.slug}?follows=true`} className="mr-3">
                    <h5 className="follows">{user.following}</h5>
                    <h6 className="text-gray">Following</h6>
                </ALink>
                <ALink href={`/profile/${user.slug}?follows=true`}>
                    <h5 className="follows">{user.followers}</h5>
                    <h6 className="text-gray">Followers</h6>
                </ALink>
            </div>
        </div>
    );
}