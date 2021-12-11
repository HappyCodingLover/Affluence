// Import Custom Component

// Import Settings

export default function SaleTypeFilter( { } ) {
    return (
        <div className="sale-type-filter filter-box">
            <ul className="filter-list">
                <li>Timed auction</li>
                <li>Fixed price</li>
                <li>Not for sale</li>
                <li>Open for offers</li>
            </ul>
            <div className="filter-action">
                <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent mr-2">Clear</button>
                <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent">Apply</button>
            </div>
        </div>
    )
}