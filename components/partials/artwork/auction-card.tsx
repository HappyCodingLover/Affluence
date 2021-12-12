// Import Custom Component
import ALink from '../../common/ALink';
import BgImage from '../../common/BgImage';
import Tippy from '../../common/Tippy';

import GotoIcon from '../../icons/goto';

import UserPopupCard from './user-popup-card';

// Import Settings

import { getUser, priceFormat, getDateTime } from '../../../utils';

export default function AuctionCard( { auction } ) {
    let user = getUser( auction.user )

    return (
        <>
            {
                auction.type == 'auction_won' && (
                    <div className="auction-card">
                        <div className="auction-card-content">
                            <Tippy tippyRef={(<UserPopupCard user={ user }/>)}>
                                <BgImage url={ user.avatar } color={ user.color } bgSize="cover" position="center center" size="small" />
                            </Tippy>
                            <div>
                                <h5 className="mb-0 d-inline mr-2">Auction won by</h5>
                                <Tippy tippyRef={(<UserPopupCard user={ user }/>)}>
                                    <ALink href={`/profile/${ user.slug }`}>@{ user.slug }</ALink>
                                </Tippy>
                            </div>
                            <div><h5 className="mb-0 d-inline">Sold for { priceFormat(auction.sold_eth) } ETH</h5> <span className="auction-price">${ priceFormat(auction.sold_usd) }</span></div>
                            <div>{ getDateTime(auction.date, '%M %d, %y, at %h:%i%a') }</div>
                        </div>
                        <div className="auction-card-divider"></div>
                    </div>
                )
            }
            {
                auction.type != 'auction_won' && (
                    <div className="bid-card">
                        <ALink href={`/profile/${ user.slug }`} className="bid-card-avatar">
                            <BgImage url={ user.avatar } color={ user.color } bgSize="cover" position="center center" size="small" />
                        </ALink>
                        <div className="bid-card-content">
                            <div>
                                <div>
                                    <h5 className="mb-0 d-inline mr-2">
                                        {
                                            auction.type == 'auction' && (
                                                <>Auction settled by</>
                                            )
                                        }
                                        {
                                            auction.type == 'bid' && (
                                                <>Bid placed by</>
                                            )
                                        }
                                        {
                                            auction.type == 'list' && (
                                                <>Listed by</>
                                            )
                                        }
                                        {
                                            auction.type == 'mint' && (
                                                <>Minted by</>
                                            )
                                        }
                                    </h5>
                                    <Tippy tippyRef={(<UserPopupCard user={ user }/>)}>
                                        <ALink href="/profile/litmusearth">@{ user.slug }</ALink>
                                    </Tippy>
                                </div>
                                <div>{ getDateTime(auction.date, '%M %d, %y, at %h:%i%a') }</div>
                            </div>
                            {auction.sold_eth && (<div className="bid-price">{ priceFormat(auction.sold_eth) } ETH</div>)}
                        </div>
                        <ALink className="bid-card-link" href={ auction.etherscan }>
                            <GotoIcon height="16" width="16" />
                        </ALink>
                    </div>
                )
            }
        </>
    );
}