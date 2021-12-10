// Import Custom Component
import ALink from '../../common/ALink';

import AuctionCard from './auction-card';

// Import Settings

export default function Provenance( { provenances, className } ) {
    return (
        <div className={`artwork-provenance ${className}`}>
            <h2 className="block-title">Provenance</h2>
            {provenances.map((provenance, index) => (
                <AuctionCard auction={provenance} key={"" + index}/>
            ))}
        </div>
    )
}