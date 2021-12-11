// Import Custom Component
import ALink from '../../common/ALink';

import EtherscanIcon from '../../icons/etherscan';
import MetadataIcon from '../../icons/metadata';
import IpfsIcon from '../../icons/ipfs';

// Import Settings

export default function Details( { details, className } ) {
    return (
        <div className={`artwork-details ${className}`}>
            <h2 className="block-title">Details</h2>
            <div className="py-2">
                <ALink className="d-flex align-items-center py-3" href={details.etherscan}>
                    <EtherscanIcon className="mr-3" width="22" height="22" />
                    View on Etherscan
                </ALink>
                <ALink className="d-flex align-items-center py-3" href={details.metadata}>
                    <MetadataIcon className="mr-3" width="22" height="22" />
                    View metadata
                </ALink>
                <ALink className="d-flex align-items-center py-3" href={details.ipfs}>
                    <IpfsIcon className="mr-3"  width="22" height="22" />
                    View on IPFS
                </ALink>
            </div>
        </div>
    )
}