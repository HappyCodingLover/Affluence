import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Import Custom Component
import Tippy from '../../common/Tippy';
import ALink from '../../common/ALink';
import ASelect from '../../common/ASelect';
import ArtworkBox from '../../common/ArtworkBox';
import ActivityBox from '../../common/ActivityBox';
import TagIcon from '../../common/TagIcon';

import CategoryFilter from '../popups/category-filter';
import CollectionsFilter from '../popups/collections-filter';
import SaleTypeFilter from '../popups/sale-type-filter';
import PriceFilter from '../popups/price-filter';

import CategoryIcon from '../../icons/category';
import CollectionsIcon from '../../icons/collections';
import LightningIcon from '../../icons/lightning';
import DollarIcon from '../../icons/dollar';

// Import Settings

import {
    getOnSaleArtworks,
    getOwnedArtworks,
    getCreatedArtworks,
    getLinkedArtworks,
    getUserActivities,
    getActivitiesTags
} from '../../../utils';

export default function Collections( { user } ) {
    const priceSorts = ["Recently added", "Price: Low to High", "Price: High to Low", "Auction ending soon"]
    
    let onSaleArtworks = getOnSaleArtworks( user )
    let ownedArtworks = getOwnedArtworks( user )
    let createdArtworks = getCreatedArtworks( user )
    let likedArtworks = getLinkedArtworks( user )
    
    let myCollections = []
    let activities = getUserActivities( user )
    let activitiesTags = getActivitiesTags( activities )

    return (
        <section className="profile-collections-section">
            <Tabs className="profile-collections-tabs mt-6" selectedTabClassName="active" selectedTabPanelClassName="show">
                <TabList className="nav nav-tabs justify-content-center mb-2">
                    <Tab className="nav-item">
                        <ALink href="#onsale" className="nav-link">On sale { onSaleArtworks.length }</ALink>
                    </Tab>
                    <Tab className="nav-item">
                        <ALink href="#owned" className="nav-link">Owned { ownedArtworks.length }</ALink>
                    </Tab>
                    <Tab className="nav-item">
                        <ALink href="#created" className="nav-link">Created { createdArtworks.length }</ALink>
                    </Tab>
                    <Tab className="nav-item">
                        <ALink href="#mycollection" className="nav-link">My Collections</ALink>
                    </Tab>
                    <Tab className="nav-item">
                        <ALink href="#liked" className="nav-link">Liked { likedArtworks.length }</ALink>
                    </Tab>
                    <Tab className="nav-item">
                        <ALink href="#activity" className="nav-link">Activity</ALink>
                    </Tab>
                </TabList>
                <TabPanel className="tab-pane fade" id="onsale">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                            <div className="d-flex">
                                <Tippy tippyRef={(<CategoryFilter />)} trigger="click" position="bottom">
                                    <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent mr-2">
                                        <CategoryIcon height="16" width="16" className="mr-2"/> Category
                                    </button>
                                </Tippy>
                                <Tippy tippyRef={(<CollectionsFilter />)} trigger="click" position="bottom">
                                    <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent mr-2">
                                        <CollectionsIcon height="16" width="16" className="mr-2"/> Collections
                                    </button>
                                </Tippy>
                                <Tippy tippyRef={(<SaleTypeFilter />)} trigger="click" position="bottom">
                                    <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent mr-2">
                                        <LightningIcon height="16" width="16" className="mr-2"/> Timed auction, Fixed price, Open for offers
                                    </button>
                                </Tippy>
                                <Tippy tippyRef={(<PriceFilter />)} trigger="click" position="bottom">
                                    <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent mr-2">
                                        <DollarIcon height="16" width="16" className="mr-2"/> Price range
                                    </button>
                                </Tippy>
                                <button type="button" className="btn-default border-0 text-dark bg-transparent mr-2">
                                    Reset
                                </button>
                            </div>
                            <div className="d-flex">
                                <ASelect selects={ priceSorts } icon="sort" iconPos="left" className="p-3 border-2"/>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            {
                                !!onSaleArtworks.length && onSaleArtworks.map( ( artwork, index ) => (
                                    <ArtworkBox artwork={artwork} key={ "menu-item" + index } />
                                ))
                            }
                            {
                                !onSaleArtworks.length && (
                                    <div className="text-center">No artwork found</div>
                                )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="tab-pane fade" id="owned">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                            <div className="d-flex">
                                <Tippy tippyRef={(<CategoryFilter />)} trigger="click" position="bottom">
                                    <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent mr-2">
                                        <CategoryIcon height="16" width="16" className="mr-2"/> Category
                                    </button>
                                </Tippy>
                                <Tippy tippyRef={(<CollectionsFilter />)} trigger="click" position="bottom">
                                    <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent mr-2">
                                        <CollectionsIcon height="16" width="16" className="mr-2"/> Collections
                                    </button>
                                </Tippy>
                                <Tippy tippyRef={(<SaleTypeFilter />)} trigger="click" position="bottom">
                                    <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent mr-2">
                                        <LightningIcon height="16" width="16" className="mr-2"/> Sale Type
                                    </button>
                                </Tippy>
                                <Tippy tippyRef={(<PriceFilter />)} trigger="click" position="bottom">
                                    <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent mr-2">
                                        <DollarIcon height="16" width="16" className="mr-2"/> Price range
                                    </button>
                                </Tippy>
                                <button type="button" className="btn-default border-0 text-dark bg-transparent mr-2">
                                    Reset
                                </button>
                            </div>
                            <div className="d-flex">
                                <ASelect selects={ priceSorts } icon="sort" iconPos="left" className="p-3 border-2"/>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            {
                                !!ownedArtworks.length && ownedArtworks.map( ( artwork, index ) => (
                                    <ArtworkBox artwork={artwork} key={ "menu-item" + index } />
                                ))
                            }
                            {
                                !ownedArtworks.length && (
                                    <div className="text-center">No artwork found</div>
                                )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="tab-pane fade" id="created">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                            <div className="d-flex">
                                <Tippy tippyRef={(<CategoryFilter />)} trigger="click" position="bottom">
                                    <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent mr-2">
                                        <CategoryIcon height="16" width="16" className="mr-2"/> Category
                                    </button>
                                </Tippy>
                                <Tippy tippyRef={(<SaleTypeFilter />)} trigger="click" position="bottom">
                                    <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent mr-2">
                                        <LightningIcon height="16" width="16" className="mr-2"/> Sale Type
                                    </button>
                                </Tippy>
                                <Tippy tippyRef={(<PriceFilter />)} trigger="click" position="bottom">
                                    <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent mr-2">
                                        <DollarIcon height="16" width="16" className="mr-2"/> Price range
                                    </button>
                                </Tippy>
                                <button type="button" className="btn-default border-0 text-dark bg-transparent mr-2">
                                    Reset
                                </button>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            {
                                !!createdArtworks.length && createdArtworks.map( ( artwork, index ) => (
                                    <ArtworkBox artwork={artwork} key={ "menu-item" + index } />
                                ))
                            }
                            {
                                !createdArtworks.length && (
                                    <div className="text-center">No artwork found</div>
                                )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="tab-pane fade" id="mycollection">
                    <div className="row">
                        <div className="col-12">
                            {
                                !!likedArtworks.length && likedArtworks.map( ( artwork, index ) => (
                                    <ArtworkBox artwork={artwork} key={ "menu-item" + index } />
                                ))
                            }
                            {
                                !likedArtworks.length && (
                                    <div className="text-center">No artwork found</div>
                                )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="tab-pane fade" id="liked">
                    <div className="row">
                        <div className="col-12">
                            {
                                !!myCollections.length && myCollections.map( ( myCollection, index ) => (
                                    <></>
                                ))
                            }
                            {
                                !myCollections.length && (
                                    <div className="text-center">No collection found</div>
                                )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="tab-pane fade" id="activity">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            {
                                !!activities.length && activities.map( ( activity, index ) => (
                                    <ActivityBox activity={ activity }/>
                                ))
                            }
                            {
                                !activities.length && (
                                    <div className="text-center">No activity found</div>
                                )
                            }
                        </div>
                        <div className="col-12 col-md-4">
                            <p className="h3">Filters</p>
                            <div className="d-flex flex-wrap-wrap">
                                {activitiesTags.map((tag, index) => (
                                    <ALink className="tag-card" href={`/tags/${tag}`} key={"" + index}>
                                        <TagIcon name={ tag.toLowerCase() } width="16" height="16" className="mr-2" /><span className="text-capitalize">{ tag }</span>
                                    </ALink>
                                ))}
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </section>
    )
}