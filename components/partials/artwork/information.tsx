// Import Custom Component
import ALink from '../../common/ALink';

import GotoIcon from '../../icons/goto';

import UserCard from './user-card';

// Import Settings

import { priceFormat } from '../../../utils';

export default function Information( { info } ) {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="ls-n-10 mb-3 border-0 d-flex align-items-center">{ info.title }</h1>
                    
                    <ALink href={ info.link }>
                        { info.description }
                        <GotoIcon height="16" width="16" className="ml-2" />
                    </ALink>
                </div>
            </div>
            <div className="row pt-6 mb-10">
                <div className="col-md-6">
                    <div className="d-flex flex-column">
                        <h5 className="mb-0">Created by</h5>
                        <div className="d-flex">
                            <div className="box-card">
                                <UserCard slug={ info.created_by }/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex bl-gray">
                    <div className="px-5">
                        <h5 className="mb-0">Sold for</h5>
                        <h2 className="mb-0">{ info.sold_eth } ETH</h2>
                        <h5 className="mb-0">${ priceFormat(info.sold_usd) }</h5>
                    </div>
                    <div className="px-5">
                        <h5 className="mb-0">Owned by</h5>
                        <div className="d-flex">
                            <div className="box-card">
                                <UserCard slug={ info.owned_by }/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}