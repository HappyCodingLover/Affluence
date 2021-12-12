// Import Custom Component
import ASelect from '../../common/ASelect';

// Import Settings

import { getPriceFilters } from '../../../utils';

export default function PriceFilter( { } ) {
    return (
        <div className="price-filter filter-box">
            <div className="d-flex">
                <ASelect selects={ getPriceFilters() } icon="down" />
            </div>
            <div className="filter-action">
                <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent mr-2">Search</button>
                <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent">Clear</button>
            </div>
        </div>
    )
}