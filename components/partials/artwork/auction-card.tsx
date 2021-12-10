// Import Custom Component
import ALink from '../../common/ALink';
import BgImage from '../../common/BgImage';
import Tippy from '../../common/Tippy';

import GotoIcon from '../../icons/goto';

import UserPopupCard from './user-popup-card';

// Import Settings

export default function AuctionCard( { auction } ) {
    return (
        <>
            {
                auction.type == 'auction_won' && (
                    <div className="auction-card">
                        <div className="auction-card-content">
                            <Tippy tippyRef={(<UserPopupCard user={auction.user}/>)}>
                                <BgImage url={auction.user.avatar} color={auction.user.color} bgSize="cover" position="center center" size="small" />
                            </Tippy>
                            <div>
                                <h5 className="mb-0 d-inline mr-2">Auction won by</h5>
                                <Tippy tippyRef={(<UserPopupCard user={auction.user}/>)}>
                                    <ALink href={`/artwork/${auction.user.slug}`}>@{auction.user.slug}</ALink>
                                </Tippy>
                            </div>
                            <div><h5 className="mb-0 d-inline">Sold for {auction.sold_eth} ETH</h5> <span className="auction-price">${auction.sold_usd}</span></div>
                            <div>{auction.date}</div>
                        </div>
                        <div className="auction-card-divider"></div>
                    </div>
                )
            }
            {
                auction.type != 'auction_won' && (
                    <div className="bid-card">
                        <ALink href={`/artwork/${auction.user.slug}`} className="bid-card-avatar">
                            <BgImage url={auction.user.avatar} color={auction.user.color} bgSize="cover" position="center center" size="small" />
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
                                    <Tippy tippyRef={(<UserPopupCard user={auction.user}/>)}>
                                        <ALink href="/artwork/litmusearth">@{auction.user.slug}</ALink>
                                    </Tippy>
                                </div>
                                <div>{auction.date}</div>
                            </div>
                            {auction.sold_eth && (<div className="bid-price">{auction.sold_eth} ETH</div>)}
                        </div>
                        <ALink className="bid-card-link" href={auction.etherscan}>
                            <GotoIcon height="16" width="16" />
                        </ALink>
                    </div>
                )
            }
        </>
    );
}