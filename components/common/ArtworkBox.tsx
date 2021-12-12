import React from 'react';

import ALink from "./ALink";
import Tippy from './Tippy';
import UserAvatar from './UserAvatar';

import DotIcon from '../icons/dot';
import LoveIcon from '../icons/love';

import ArtworkActions from '../partials/popups/artwork-actions';

import { getUser, priceFormat } from '../../utils';

interface ArtworkBoxProps {
    className?: string;
    style?: object;
    artwork?: any;
    id?: number
}
const ArtworkBox: React.FC<ArtworkBoxProps> = ({
    children,
    className,
    style,
    artwork,
    id,
    ...props
  }) => {
    let created_user = getUser( artwork.created_by )
    let owned_user = getUser( artwork.owned_by )
    let highest_bid = 0
    let highest_bid_user = ''
    
    for (let provenance_index = 0; provenance_index < artwork.provenances.length; provenance_index++) {
        if (artwork.provenances[provenance_index].sold_eth && artwork.provenances[provenance_index].sold_eth > highest_bid) {
            highest_bid = artwork.provenances[provenance_index].sold_eth
            highest_bid_user = artwork.provenances[provenance_index].user
        }
    }

    return (
        <div className={className ? `artwork-box ${className}` : 'artwork-box'} id={ id ? '' + id : '' } style={ style } { ...props }>
            <div className="artwork-box-header">
                <div className="artwork-avatars">
                    <ALink href={`/profile/${created_user.slug}`}>
                        <UserAvatar user={ created_user } size="small" />
                    </ALink>
                    <ALink href={`/profile/${owned_user.slug}`}>
                        <UserAvatar user={ owned_user } size="small" />
                    </ALink>
                </div>
                <div className="artwork-actions">
                    <Tippy tippyRef={ <ArtworkActions /> } className="flex-grow-1 d-flex justify-content-between" trigger="click" position="top" {...props}>
                        <div className="tag-card" style={{ height: '32px', width: '32px', margin: '0' }}>
                            <DotIcon width="22" height="4" />
                        </div>
                    </Tippy>
                </div>
            </div>
            <div className="artwork-box-content">
                <div className="artwork-img">
                    <img src={artwork.image} />
                </div>
                <div className="artwork-user">
                    <ALink href={`/profile/${created_user.slug}`}>
                        <div>{ created_user.name }</div>
                    </ALink>
                </div>
                <div className="artwork-price">
                    From <span>{ priceFormat(artwork.sold_eth) }</span> ETH 1 / { artwork.provenances.length }
                </div>
                <div className="artwork-actions">
                    <div className="artwork-bid">
                        {
                            highest_bid_user && (
                                <span>Bid ~{ highest_bid } { highest_bid_user }</span>
                            )
                        }
                    </div>
                    <div className="artwork-like">
                        <LoveIcon width="16" height="16" /> { artwork.loves }
                    </div>
                </div>
            </div>
            <div className="artwork-box-shadows"></div>
            { children }
        </div>
    )
}

export default ArtworkBox;