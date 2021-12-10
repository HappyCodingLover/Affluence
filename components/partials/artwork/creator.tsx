// Import Custom Component
import ALink from '../../common/ALink';
import BgImage from '../../common/BgImage';

// Import Settings

export default function Creator( { creator, className } ) {
    return (
        <div className={`artwork-creator ${className}`}>
            <h2 className="block-title">Creator</h2>
            <div className="row">
                <div className="col-md-6">
                    <ALink href={`/artwork/${creator.slug}`} className="d-flex">
                        <BgImage url={creator.avatar} bgSize="cover" position="center center" size="large" />
                        <div className="">
                            <h2 className="">{creator.name}</h2>
                            <h4 className="gradient-title">@${creator.slug}</h4>
                        </div>
                    </ALink>
                </div>
                <div className="col-md-6">
                    <h4>{creator.sub_title}</h4>
                </div>
            </div>
        </div>
    )
}