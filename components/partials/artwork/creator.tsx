// Import Custom Component
import ALink from '../../common/ALink';
import BgImage from '../../common/BgImage';

// Import Settings

import { getUser } from '../../../utils';

export default function Creator( { creator, className } ) {
    let user = getUser( creator )

    return (
        <div className={`artwork-creator ${className}`}>
            <h2 className="block-title">Creator</h2>
            <div className="row">
                <div className="col-md-6">
                    <ALink href={`/profile/${ user.slug }`} className="d-flex">
                        <BgImage url={ user.avatar } color={ user.color } bgSize="cover" position="center center" size="large" />
                        <div className="">
                            <h2 className="">{ user.name }</h2>
                            <h4 className="gradient-title">@${ user.slug }</h4>
                        </div>
                    </ALink>
                </div>
                <div className="col-md-6">
                    <h4 dangerouslySetInnerHTML={{ __html: user.bio }} />
                </div>
            </div>
        </div>
    )
}