// Import Custom Component
import SearchIcon from '../../icons/search';

// Import Settings

export default function CollectionsFilter( { } ) {
    return (
        <div className="collections-filter filter-box">
            <div className="d-flex p-4">
                <SearchIcon className="d-inline rounded-circle mr-2" width="16" height="16"/>
                <input className="border-0 border-hover-0" type="text" placeholder="Search in collections" />
            </div>
            <ul className="filter-list">
                <li>
                    <img src="images/icons/stay.jfif" className="d-inline rounded-circle mr-2" width="24" height="24" alt="Say it with a NFT"/>Say it with a NFT
                </li>
                <li>
                    <img src="images/icons/signals.gif" className="d-inline rounded-circle mr-2" width="24" height="24" alt="THE SIGNALS"/>THE SIGNALS
                </li>
                <li>
                    <img src="images/icons/ether-square.png" className="d-inline rounded-circle mr-2" width="24" height="24" alt="EtherSquare"/>EtherSquare
                </li>
                <li>
                    <img src="images/icons/rarible-multiples.png" className="d-inline rounded-circle mr-2" width="24" height="24" alt="Rarible Multiples"/>Rarible Multiples
                </li>
                <li>
                    <img src="images/icons/rarible-multiples.png" className="d-inline rounded-circle mr-2" width="24" height="24" alt="Rarible"/>Rarible
                </li>
            </ul>
            <div className="filter-action">
                <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent mr-2">Search</button>
                <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent">Clear</button>
            </div>
        </div>
    )
}