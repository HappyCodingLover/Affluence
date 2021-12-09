import { useEffect, useState } from 'react';
import Reveal from 'react-awesome-reveal';
import { fadeInUpShorter } from '../../../utils/data/keyframes';

// Import Custom Component
import ALink from '../../common/ALink';

export default function SpecialCollectionTwo() {
    const [tab, setTab] = useState(0);

    useEffect(() => {
        let customMenuAll = document.querySelectorAll('.custom-menu');

        for (let i = 1; i <= customMenuAll.length; i++) {
            let tabNode = document.querySelector('.tab' + i);
            let distance: number = tabNode.getBoundingClientRect().left - document.querySelector('.scroll-container').getBoundingClientRect().left;

            if (i == customMenuAll.length) {
                distance = distance - 100;
                customMenuAll[i - 1].setAttribute('style', 'left:' + distance + 'px');
            } else {
                customMenuAll[i - 1].setAttribute('style', 'left:' + distance + 'px');
            }
        }
    }, [tab])

    function openList(e, value) {
        e.currentTarget.classList.toggle('opened');

        if (tab != value) {
            setTab(value);
        } else {
            setTab(0);
        }
    }

    function openSingleList(e) {
        e.currentTarget.classList.toggle('opened');
    }

    function sidebarToggle(e) {
        e.preventDefault();
        e.currentTarget.closest('.filter-toggle') && e.currentTarget.closest('.filter-toggle').classList.toggle('opened');
    }

    return (
        <section className="explore-products-section">
            <h2 className="section-title ls-n-10 m-b-2 border-0 d-flex align-items-start align-items-lg-center flex-lg-row flex-column">
                <span className="mr-lg-4 text-dark mb-2 mb-xl-0">Explore</span>

                <div className="d-flex align-items-center justify-content-between w-100 position-relative">
                    <div className="d-flex align-items-center scroll-container">
                        <div className="tab1 toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0 ml-1 mr-1 pl-1 pr-1" onClick={(e) => { openList(e, 1); }}>
                            <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent"><svg viewBox="0 0 16 18" fill="none" width="16" height="16" className="mr-2"><path fillRule="evenodd" clipRule="evenodd" d="M8 0.13623L8.3721 0.348862L15.3721 4.34886L15.75 4.5648V5.00004L15.75 13V13.4636L15.3354 13.6709L8.33541 17.1709L8 17.3386L7.66459 17.1709L0.66459 13.6709L0.25 13.4636L0.25 13L0.25 5.00004L0.25 4.5648L0.627896 4.34886L7.6279 0.348862L8 0.13623ZM1.75 12.5365L1.75 6.29243L7.25 9.43529L7.25 15.2865L1.75 12.5365ZM8.75 15.2865L14.25 12.5365L14.25 6.29243L8.75 9.43529L8.75 15.2865ZM8 1.86386L13.4883 5.00004L8 8.13623L2.51167 5.00004L8 1.86386Z" fill="currentColor"></path></svg>Blockchain</button>
                        </div>

                        <div className="tab2 toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0  ml-1 mr-1 pl-1 pr-1" onClick={(e) => { openList(e, 2); }}>
                            <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent"><svg viewBox="0 0 17 17" fill="none" width="16" height="16" className="mr-2"><path fillRule="evenodd" clipRule="evenodd" d="M14.8548 1.50746L11.957 0.730998C10.8901 0.445115 9.7934 1.07828 9.50751 2.14521L8.73106 5.04299C8.44517 6.10992 9.07834 7.2066 10.1453 7.49248L13.043 8.26894C14.11 8.55482 15.2067 7.92165 15.4925 6.85472L16.269 3.95694C16.5549 2.89001 15.9217 1.79334 14.8548 1.50746ZM10.9564 2.53344C11.0279 2.26671 11.302 2.10842 11.5688 2.17989L14.4666 2.95634C14.7333 3.02781 14.8916 3.30198 14.8201 3.56872L14.0436 6.46649C13.9722 6.73323 13.698 6.89152 13.4313 6.82005L10.5335 6.04359C10.2668 5.97212 10.1085 5.69795 10.1799 5.43122L10.9564 2.53344ZM5.5 1.49998L2.5 1.49998C1.39543 1.49998 0.5 2.39541 0.5 3.49998L0.5 6.49998C0.5 7.60455 1.39543 8.49998 2.5 8.49998H5.5C6.60457 8.49998 7.5 7.60455 7.5 6.49998V3.49998C7.5 2.39541 6.60457 1.49998 5.5 1.49998ZM2 3.49998C2 3.22384 2.22386 2.99998 2.5 2.99998L5.5 2.99998C5.77614 2.99998 6 3.22384 6 3.49998V6.49998C6 6.77612 5.77614 6.99998 5.5 6.99998L2.5 6.99998C2.22386 6.99998 2 6.77612 2 6.49998L2 3.49998ZM10.5 9.49998H13.5C14.6046 9.49998 15.5 10.3954 15.5 11.5V14.5C15.5 15.6046 14.6046 16.5 13.5 16.5H10.5C9.39546 16.5 8.50003 15.6046 8.50003 14.5V11.5C8.50003 10.3954 9.39546 9.49998 10.5 9.49998ZM10.5 11C10.2239 11 10 11.2238 10 11.5V14.5C10 14.7761 10.2239 15 10.5 15H13.5C13.7762 15 14 14.7761 14 14.5V11.5C14 11.2238 13.7762 11 13.5 11H10.5ZM5.5 9.49998H2.5C1.39543 9.49998 0.5 10.3954 0.5 11.5L0.5 14.5C0.5 15.6046 1.39543 16.5 2.5 16.5H5.5C6.60457 16.5 7.5 15.6046 7.5 14.5L7.5 11.5C7.5 10.3954 6.60457 9.49998 5.5 9.49998ZM2 11.5C2 11.2238 2.22386 11 2.5 11H5.5C5.77614 11 6 11.2238 6 11.5L6 14.5C6 14.7761 5.77614 15 5.5 15H2.5C2.22386 15 2 14.7761 2 14.5L2 11.5Z" fill="currentColor"></path></svg>Category</button>
                        </div>

                        <div className="tab3 toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0 ml-1 mr-1 pl-1 pr-1" onClick={(e) => { openList(e, 3); }}>
                            <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent"><svg viewBox="0 0 18 18" fill="none" width="16" height="16" className="mr-2"><path fillRule="evenodd" clipRule="evenodd" d="M10.3321 0.832739C8.59836 0.368178 6.81627 1.39707 6.35171 3.13084L6.05183 4.25L3.5 4.25C1.70507 4.25 0.25 5.70507 0.25 7.5L0.25 14.5C0.25 16.2949 1.70507 17.75 3.5 17.75L8.5 17.75C10.0651 17.75 11.3719 16.6436 11.6808 15.1703C13.4104 15.6262 15.1847 14.5981 15.6481 12.8687L17.4599 6.10725C17.9244 4.37349 16.8955 2.5914 15.1618 2.12683L10.3321 0.832739ZM11.75 13.636L12.0559 13.7179C12.9895 13.9681 13.9491 13.4141 14.1992 12.4805L16.011 5.71903C16.2611 4.78546 15.7071 3.82587 14.7735 3.57572L9.9439 2.28163C9.01034 2.03148 8.05075 2.5855 7.8006 3.51907L7.60474 4.25L8.5 4.25C10.2949 4.25 11.75 5.70507 11.75 7.5L11.75 13.636ZM1.75 7.5C1.75 6.5335 2.5335 5.75 3.5 5.75L8.5 5.75C9.4665 5.75 10.25 6.5335 10.25 7.5L10.25 14.5C10.25 15.4665 9.4665 16.25 8.5 16.25H3.5C2.5335 16.25 1.75 15.4665 1.75 14.5L1.75 7.5Z" fill="currentColor"></path></svg>Collections</button>
                        </div>

                        <div className="tab4 toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0 ml-1 mr-1 pl-1 pr-1" onClick={(e) => { openList(e, 4); }}>
                            <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent"><svg viewBox="0 0 14 16" fill="none" width="16" height="16" className="mr-2"><path fillRule="evenodd" clipRule="evenodd" d="M7.93206 0.721796C8.20353 0.839642 8.36482 1.12235 8.32811 1.41602L7.75512 6H12.9999C13.2586 6 13.4939 6.14964 13.6037 6.38389C13.7134 6.61815 13.6777 6.89473 13.5121 7.09345L6.84541 15.0935C6.65594 15.3208 6.33927 15.396 6.0678 15.2782C5.79632 15.1603 5.63503 14.8776 5.67174 14.584L6.24474 10H0.999927C0.741248 10 0.50592 9.85036 0.3962 9.6161C0.286481 9.38184 0.322177 9.10526 0.487779 8.90654L7.15445 0.90654C7.34391 0.679184 7.66058 0.60395 7.93206 0.721796ZM2.42329 8.66666H6.99993C7.19115 8.66666 7.37316 8.74877 7.49971 8.89213C7.62626 9.03548 7.68516 9.22627 7.66145 9.41602L7.27682 12.493L11.5766 7.33333H6.99993C6.80871 7.33333 6.62669 7.25122 6.50014 7.10786C6.37359 6.96451 6.31469 6.77372 6.33841 6.58397L6.72303 3.50697L2.42329 8.66666Z" fill="currentColor"></path></svg>Sale Type</button>
                        </div>

                        <div className="tab5 toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0 ml-1 mr-1 pl-1 pr-1" onClick={(e) => { openList(e, 5); }}>
                            <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent"><svg viewBox="0 0 10 16" fill="none" width="16" height="16" className="mr-2"><path fillRule="evenodd" clipRule="evenodd" d="M4.99992 0.333313C5.36811 0.333313 5.66659 0.63179 5.66659 0.99998V2.66665H8.33325C8.70144 2.66665 8.99992 2.96512 8.99992 3.33331C8.99992 3.7015 8.70144 3.99998 8.33325 3.99998H5.66659V7.33331H6.66659C7.46224 7.33331 8.2253 7.64938 8.78791 8.21199C9.35052 8.7746 9.66659 9.53766 9.66659 10.3333C9.66659 11.129 9.35052 11.892 8.78791 12.4546C8.2253 13.0172 7.46224 13.3333 6.66659 13.3333H5.66659V15C5.66659 15.3682 5.36811 15.6666 4.99992 15.6666C4.63173 15.6666 4.33325 15.3682 4.33325 15V13.3333H0.999919C0.631729 13.3333 0.333252 13.0348 0.333252 12.6666C0.333252 12.2985 0.631729 12 0.999919 12H4.33325V8.66665H3.33325C2.5376 8.66665 1.77454 8.35058 1.21193 7.78797C0.649323 7.22536 0.333252 6.4623 0.333252 5.66665C0.333252 4.871 0.649323 4.10793 1.21193 3.54533C1.77454 2.98272 2.5376 2.66665 3.33325 2.66665H4.33325V0.99998C4.33325 0.63179 4.63173 0.333313 4.99992 0.333313ZM4.33325 3.99998H3.33325C2.89122 3.99998 2.4673 4.17557 2.15474 4.48814C1.84218 4.8007 1.66659 5.22462 1.66659 5.66665C1.66659 6.10867 1.84218 6.5326 2.15474 6.84516C2.4673 7.15772 2.89122 7.33331 3.33325 7.33331H4.33325V3.99998ZM5.66659 8.66665V12H6.66659C7.10861 12 7.53254 11.8244 7.8451 11.5118C8.15766 11.1993 8.33325 10.7753 8.33325 10.3333C8.33325 9.89128 8.15766 9.46736 7.8451 9.1548C7.53254 8.84224 7.10861 8.66665 6.66659 8.66665H5.66659Z" fill="currentColor"></path></svg>Price Range</button>
                        </div>
                    </div>

                    <div className="filter-sort-item toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-1 mb-xl-0 ml-5 mr-0 mr-xl-5 menu-position-mx-xl-left" onClick={openSingleList}>
                        <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent">
                            <svg viewBox="0 0 14 10" fill="none" width="16" height="16" className="mr-2 d-sm-block d-none"><path fillRule="evenodd" clipRule="evenodd" d="M0.333252 0.99998C0.333252 0.63179 0.631729 0.333313 0.999919 0.333313H12.9999C13.3681 0.333313 13.6666 0.63179 13.6666 0.99998C13.6666 1.36817 13.3681 1.66665 12.9999 1.66665H0.999919C0.631729 1.66665 0.333252 1.36817 0.333252 0.99998ZM1.66659 4.99998C1.66659 4.63179 1.96506 4.33331 2.33325 4.33331H11.6666C12.0348 4.33331 12.3333 4.63179 12.3333 4.99998C12.3333 5.36817 12.0348 5.66665 11.6666 5.66665H2.33325C1.96506 5.66665 1.66659 5.36817 1.66659 4.99998ZM2.99992 8.99998C2.99992 8.63179 3.2984 8.33331 3.66659 8.33331H10.3333C10.7014 8.33331 10.9999 8.63179 10.9999 8.99998C10.9999 9.36817 10.7014 9.66665 10.3333 9.66665H3.66659C3.2984 9.66665 2.99992 9.36817 2.99992 8.99998Z" fill="currentColor"></path></svg>
                            <span className="d-sm-block d-none">Recently Added</span><span className="sub-title d-sm-block d-none">Filter & Sort</span>
                            <svg viewBox="0 0 24 24" fill="none" width="16" height="16" className="d-sm-none"><path d="M20 16L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6 16L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 8L18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 8L4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="9" cy="16" r="3" fill="currentColor"></circle><circle cx="15" cy="8" r="3" fill="currentColor"></circle></svg>
                        </button>

                        <ul className="sort-list">
                            <li className="no-hover pl-3">
                                <ALink href="#" className="d-block text-gray" >Sort by</ALink>
                            </li>

                            <li className="active">
                                <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                    <span>Recently Added</span>
                                    <svg viewBox="0 0 14 11" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN cCoyfS"><path d="M1 5L5 9L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                                </ALink>
                            </li>
                            <li>
                                <ALink href="#" className="d-block" >Price: Low to High</ALink>
                            </li>

                            <li>
                                <ALink href="#" className="d-block" >Price: High to Low</ALink>
                            </li>

                            <li>
                                <ALink href="#" className="d-block" >Auction ending soon</ALink>
                            </li>

                            <li className="no-hover pl-3">
                                <ALink href="#" className="d-block text-gray" >Options</ALink>
                            </li>

                            <li className="no-hover">
                                <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                    <span>Verfied Only</span>

                                    <div className="filter-toggle d-flex">
                                        <a href="#" onClick={e => sidebarToggle(e)}>&nbsp;</a>
                                    </div>
                                </ALink>
                            </li>

                            <li className="no-hover">
                                <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                    <span>Show NSFW</span>

                                    <div className="filter-toggle d-flex opened">
                                        <a href="#" onClick={e => sidebarToggle(e)}>&nbsp;</a>
                                    </div>
                                </ALink>
                            </li>
                        </ul>
                    </div>

                    <div className={`toolbox-item toolbox-sort select-custom position-absolute opened `} >
                        <ul className={`sort-list custom-menu menu1 ${tab == 1 ? 'selected' : ''}`}>
                            <li>
                                <ALink href="#" className="d-block" >Ethereum</ALink>
                            </li>
                            <li>
                                <ALink href="#" className="d-block" >Flow</ALink>
                            </li>

                            <li className="d-flex justify-content-center btn-group">
                                <div className="d-flex align-items-center justify-content-between w-100 mt-1">
                                    <button type="button" className="btn-default btn-clear mr-3 btn-rounded">Clear</button>

                                    <button type="button" className="btn-default btn-apply btn-rounded">Apply</button>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="toolbox-item toolbox-sort select-custom position-absolute opened">
                        <ul className={`sort-list custom-menu menu2 ${tab == 2 ? 'selected' : ''}`}>
                            <li className="active">
                                <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                    <span>All</span>
                                    <svg viewBox="0 0 14 11" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN cCoyfS"><path d="M1 5L5 9L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                                </ALink>
                            </li>
                            <li>
                                <ALink href="#" className="d-block" >🌈 Art</ALink>
                            </li>
                            <li>
                                <ALink href="#" className="d-block" >📸 Photography</ALink>
                            </li>
                            <li>
                                <ALink href="#" className="d-block" >🕹 Games</ALink>
                            </li>
                            <li>
                                <ALink href="#" className="d-block" >👾 Metaverses</ALink>
                            </li>
                        </ul>
                    </div>

                    <div className="toolbox-item toolbox-sort select-custom position-absolute opened">
                        <ul className={`sort-list custom-menu menu3 min-300 ${tab == 3 ? 'selected' : ''}`}>
                            <li className="search-group">
                                <div className="header-icon header-search header-search-inline header-search-category custom-search mr-0 ml-0">
                                    <form action="#" method="get">
                                        <div className="header-search-wrapper">
                                            <button className="btn border-0 p-0" title="search" type="submit">
                                                <svg viewBox="0 0 16 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7ZM7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C8.57591 14 10.0302 13.4792 11.2001 12.6004C11.2281 12.6376 11.259 12.6733 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L12.7071 11.2929C12.6733 11.259 12.6376 11.2281 12.6004 11.2001C13.4792 10.0302 14 8.57591 14 7C14 3.13401 10.866 0 7 0Z" fill="currentColor"></path></svg>
                                            </button>

                                            <input type="text" className="form-control bg-transparent" placeholder="Search in collections" required />
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li>
                                <ALink href="#" className="d-block" >
                                    <div className="product-default media-with-lazy left-details product-widget align-items-center mb-0">
                                        <figure className="product-image-circle mr-3">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE3MiwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE3MiwxKTsgc3Ryb2tlLXdpZHRoOjAuMjQ7Jz48cmVjdCAgeD0nMjInIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjInIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48L2c+PC9zdmc+" width="30" height="30" alt="Game" />
                                        </figure>

                                        <div className="product-details">
                                            <h3 className="product-title mb-0">JRNY NFT Club</h3>
                                        </div>
                                    </div>
                                </ALink>
                            </li>

                            <li>
                                <ALink href="#" className="d-block" >
                                    <div className="product-default media-with-lazy left-details product-widget align-items-center mb-0">
                                        <figure className="product-image-circle mr-3">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE3MiwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE3MiwxKTsgc3Ryb2tlLXdpZHRoOjAuMjQ7Jz48cmVjdCAgeD0nMjInIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjInIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48L2c+PC9zdmc+" width="30" height="30" alt="Game" />
                                        </figure>

                                        <div className="product-details">
                                            <h3 className="product-title mb-0">JRNY NFT Club</h3>
                                        </div>
                                    </div>
                                </ALink>
                            </li>

                            <li>
                                <ALink href="#" className="d-block" >
                                    <div className="product-default media-with-lazy left-details product-widget align-items-center mb-0">
                                        <figure className="product-image-circle mr-3">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE3MiwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE3MiwxKTsgc3Ryb2tlLXdpZHRoOjAuMjQ7Jz48cmVjdCAgeD0nMjInIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjInIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48L2c+PC9zdmc+" width="30" height="30" alt="Game" />
                                        </figure>

                                        <div className="product-details">
                                            <h3 className="product-title mb-0">JRNY NFT Club</h3>
                                        </div>
                                    </div>
                                </ALink>
                            </li>

                            <li>
                                <ALink href="#" className="d-block" >
                                    <div className="product-default media-with-lazy left-details product-widget align-items-center mb-0">
                                        <figure className="product-image-circle mr-3">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE3MiwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE3MiwxKTsgc3Ryb2tlLXdpZHRoOjAuMjQ7Jz48cmVjdCAgeD0nMjInIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjInIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48L2c+PC9zdmc+" width="30" height="30" alt="Game" />
                                        </figure>

                                        <div className="product-details">
                                            <h3 className="product-title mb-0">JRNY NFT Club</h3>
                                        </div>
                                    </div>
                                </ALink>
                            </li>

                            <li className="d-flex justify-content-center btn-group">
                                <div className="d-flex align-items-center justify-content-between w-100 mt-1">
                                    <button type="button" className="btn-default btn-clear mr-3 btn-rounded">Clear</button>

                                    <button type="button" className="btn-default btn-apply btn-rounded">Apply</button>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="toolbox-item toolbox-sort select-custom position-absolute opened">
                        <ul className={`sort-list custom-menu menu4 ${tab == 4 ? 'selected' : ''}`}>
                            <li>
                                <ALink href="#" className="d-block" >Timed auction</ALink>
                            </li>
                            <li>
                                <ALink href="#" className="d-block" >Fixed Price</ALink>
                            </li>

                            <li>
                                <ALink href="#" className="d-block" >Not for sale</ALink>
                            </li>
                            <li>
                                <ALink href="#" className="d-block" >Open for offers</ALink>
                            </li>

                            <li className="d-flex justify-content-center btn-group">
                                <div className="d-flex align-items-center justify-content-between w-100 mt-1">
                                    <button type="button" className="btn-default btn-clear mr-3 btn-rounded">Clear</button>

                                    <button type="button" className="btn-default btn-apply btn-rounded">Apply</button>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="toolbox-item toolbox-sort select-custom position-absolute opened menu-position-mx-xl-left">
                        <ul className={`sort-list custom-menu menu5 min-300 ${tab == 5 ? 'selected' : ''}`}>
                            <li className="no-hover mb-0 pb-1">
                                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openSingleList}>
                                    <ALink href="#" className="d-flex align-items-center justify-content-center w-100" >
                                        <div className="product-default media-with-lazy left-details w-100 product-widget align-items-center mb-0">
                                            <figure className="product-image-circle mr-3">
                                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE3MiwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE3MiwxKTsgc3Ryb2tlLXdpZHRoOjAuMjQ7Jz48cmVjdCAgeD0nMjInIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjInIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48L2c+PC9zdmc+" width="30" height="30" alt="Game" />
                                            </figure>

                                            <div className="product-details">
                                                <h3 className="product-title mb-0">JRNY NFT Club</h3>
                                            </div>
                                        </div>

                                        <svg viewBox="0 0 16 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kRuSvk"><path fillRule="evenodd" clipRule="evenodd" d="M8 11.4143L12.7071 6.7072C13.0976 6.31668 13.0976 5.68351 12.7071 5.29299C12.3166 4.90246 11.6834 4.90246 11.2929 5.29299L8 8.58588L4.70711 5.29299C4.31658 4.90246 3.68342 4.90246 3.29289 5.29299C2.90237 5.68351 2.90237 6.31668 3.29289 6.7072L8 11.4143Z" fill="currentColor"></path></svg>
                                    </ALink>

                                    <ul className="sort-list min-300">
                                        <li className="active">
                                            <ALink href="#" className="d-flex align-items-center justify-content-between w-100" >
                                                <div className="product-default media-with-lazy w-100 left-details product-widget align-items-center mb-0">
                                                    <figure className="product-image-circle mr-3">
                                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE3MiwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE3MiwxKTsgc3Ryb2tlLXdpZHRoOjAuMjQ7Jz48cmVjdCAgeD0nMjInIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjInIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48L2c+PC9zdmc+" width="30" height="30" alt="Game" />
                                                    </figure>

                                                    <div className="product-details">
                                                        <h3 className="product-title mb-0">JRNY NFT Club</h3>
                                                    </div>
                                                </div>

                                                <svg viewBox="0 0 14 11" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN cCoyfS"><path d="M1 5L5 9L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                                            </ALink>
                                        </li>

                                        <li>
                                            <ALink href="#" className="d-block w-100" >
                                                <div className="product-default media-with-lazy left-details product-widget align-items-center mb-0">
                                                    <figure className="product-image-circle mr-3">
                                                        <img src="https://raw.githubusercontent.com/rarible/public-assets/main/tokens/FLOW.png" width="30" height="30" alt="Game" />
                                                    </figure>

                                                    <div className="product-details">
                                                        <h3 className="product-title mb-0">Flow</h3>
                                                    </div>
                                                </div>
                                            </ALink>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="search-group no-hover">
                                <div className="header-icon header-search header-search-inline header-search-category no-icon custom-search mr-0 ml-0">
                                    <form action="#" method="get">
                                        <div className="header-search-wrapper d-flex align-items-center">
                                            <input type="text" className="form-control bg-transparent w-50 mr-3" placeholder="From" required />
                                            <input type="text" className="form-control bg-transparent w-50" placeholder="To" required />
                                        </div>
                                    </form>
                                </div>
                            </li>

                            <li className="d-flex justify-content-center btn-group">
                                <div className="d-flex align-items-center justify-content-between w-100 mt-1">
                                    <button type="button" className="btn-default btn-clear mr-3 btn-rounded">Clear</button>

                                    <button type="button" className="btn-default btn-apply btn-rounded">Apply</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </h2>

            <div className="row">
                <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-6">
                    <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000} triggerOnce>
                        <div className="product-default media-with-lazy left-details product-type-one">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>

                                            <span className="badge">
                                                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                            </span>
                                        </figure>
                                    </div>
                                </div>

                                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openSingleList}>
                                    <a href="javascript:;" className="trigger">
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </a>

                                    <ul className="sort-list">
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                                <span>Refresh Metadata</span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Share</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Report</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <figure>
                                <ALink href="#">
                                    <img src="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:34884839299420339406790897271229401034110475657906093142123204612999123828756/7caed8b" width="271" height="271" alt="Banner" />
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title mb-1">
                                    <ALink href="#">POKErn #0003</ALink>
                                </h3>

                                <h4 className="mb-0">
                                    <ALink href="#">Highest bid 1/1</ALink>
                                </h4>

                                <div className="category-wrap d-flex align-items-center justify-content-between">
                                    <div className="category-list text-left">
                                        <ALink href="#">0.02 WETH</ALink>
                                    </div>

                                    <a href="#" className="d-flex align-items-center">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                                        <span className="ml-2">61</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-6">
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000} triggerOnce>
                        <div className="product-default media-with-lazy left-details product-type-one">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>

                                            <span className="badge">
                                                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                            </span>
                                        </figure>
                                    </div>
                                </div>

                                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openSingleList}>
                                    <a href="javascript:;" className="trigger">
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </a>

                                    <ul className="sort-list">
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                                <span>Refresh Metadata</span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Share</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Report</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <figure>
                                <ALink href="#">
                                    <img src="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:59169797156154109360217104280470305315311955593423661085416137809818619478030/dbc3cfe8" width="271" height="271" alt="Banner" />
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title mb-1">
                                    <ALink href="#">POKErn #0003</ALink>
                                </h3>

                                <h4 className="mb-0">
                                    <ALink href="#">Highest bid 1/1</ALink>
                                </h4>

                                <div className="category-wrap d-flex align-items-center justify-content-between">
                                    <div className="category-list text-left">
                                        <ALink href="#">0.02 WETH</ALink>
                                    </div>

                                    <a href="#" className="d-flex align-items-center">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                                        <span className="ml-2">61</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-6">
                    <Reveal keyframes={fadeInUpShorter} delay={500} duration={1000} triggerOnce>
                        <div className="product-default media-with-lazy left-details product-type-one">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>

                                            <span className="badge">
                                                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                            </span>
                                        </figure>
                                    </div>
                                </div>

                                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openSingleList}>
                                    <a href="javascript:;" className="trigger">
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </a>

                                    <ul className="sort-list">
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                                <span>Refresh Metadata</span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Share</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Report</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <figure>
                                <ALink href="#">
                                    <img src="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:59169797156154109360217104280470305315311955593423661085416137809818619478019/b96445a7" width="271" height="271" alt="Banner" />
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title mb-1">
                                    <ALink href="#">POKErn #0003</ALink>
                                </h3>

                                <h4 className="mb-0">
                                    <ALink href="#">Highest bid 1/1</ALink>
                                </h4>

                                <div className="category-wrap d-flex align-items-center justify-content-between">
                                    <div className="category-list text-left">
                                        <ALink href="#">0.02 WETH</ALink>
                                    </div>

                                    <a href="#" className="d-flex align-items-center">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                                        <span className="ml-2">61</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-6">
                    <Reveal keyframes={fadeInUpShorter} delay={700} duration={1000} triggerOnce>
                        <div className="product-default media-with-lazy left-details product-type-one">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>

                                            <span className="badge">
                                                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                            </span>
                                        </figure>
                                    </div>
                                </div>

                                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openSingleList}>
                                    <a href="javascript:;" className="trigger">
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </a>

                                    <ul className="sort-list">
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                                <span>Refresh Metadata</span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Share</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Report</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <figure>
                                <ALink href="#">
                                    <video src="https://img.rarible.com/prod/video/upload/t_preview/prod-itemAnimations/0xf6793da657495ffeff9ee6350824910abc21356c:59169797156154109360217104280470305315311955593423661085416137809818619478059/c92644a2" className="w-100"
                                        autoPlay={true}
                                        loop={true}
                                        muted={true}
                                        playsInline={true}>
                                    </video>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title mb-1">
                                    <ALink href="#">POKErn #0003</ALink>
                                </h3>

                                <h4 className="mb-0">
                                    <ALink href="#">Highest bid 1/1</ALink>
                                </h4>

                                <div className="category-wrap d-flex align-items-center justify-content-between">
                                    <div className="category-list text-left">
                                        <ALink href="#">0.02 WETH</ALink>
                                    </div>

                                    <a href="#" className="d-flex align-items-center">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                                        <span className="ml-2">61</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-6">
                    <Reveal keyframes={fadeInUpShorter} delay={900} duration={1000} triggerOnce>
                        <div className="product-default media-with-lazy left-details product-type-one">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>

                                            <span className="badge">
                                                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                            </span>
                                        </figure>
                                    </div>
                                </div>

                                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openSingleList}>
                                    <a href="javascript:;" className="trigger">
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </a>

                                    <ul className="sort-list">
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                                <span>Refresh Metadata</span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Share</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Report</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <figure>
                                <ALink href="#">
                                    <video src="https://img.rarible.com/prod/video/upload/t_preview/prod-itemAnimations/0xf6793da657495ffeff9ee6350824910abc21356c:59169797156154109360217104280470305315311955593423661085416137809818619478059/c92644a2" className="w-100"
                                        autoPlay={true}
                                        loop={true}
                                        muted={true}
                                        playsInline={true}>
                                    </video>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title mb-1">
                                    <ALink href="#">POKErn #0003</ALink>
                                </h3>

                                <h4 className="mb-0">
                                    <ALink href="#">Highest bid 1/1</ALink>
                                </h4>

                                <div className="category-wrap d-flex align-items-center justify-content-between">
                                    <div className="category-list text-left">
                                        <ALink href="#">0.02 WETH</ALink>
                                    </div>

                                    <a href="#" className="d-flex align-items-center">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                                        <span className="ml-2">61</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-6">
                    <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce>
                        <div className="product-default media-with-lazy left-details product-type-one">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>

                                            <span className="badge">
                                                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                            </span>
                                        </figure>
                                    </div>
                                </div>

                                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openSingleList}>
                                    <a href="javascript:;" className="trigger">
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </a>

                                    <ul className="sort-list">
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                                <span>Refresh Metadata</span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Share</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Report</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <figure>
                                <ALink href="#">
                                    <img src="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:34884839299420339406790897271229401034110475657906093142123204612999123828756/7caed8b" width="271" height="271" alt="Banner" />
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title mb-1">
                                    <ALink href="#">POKErn #0003</ALink>
                                </h3>

                                <h4 className="mb-0">
                                    <ALink href="#">Highest bid 1/1</ALink>
                                </h4>

                                <div className="category-wrap d-flex align-items-center justify-content-between">
                                    <div className="category-list text-left">
                                        <ALink href="#">0.02 WETH</ALink>
                                    </div>

                                    <a href="#" className="d-flex align-items-center">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                                        <span className="ml-2">61</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-6">
                    <Reveal keyframes={fadeInUpShorter} delay={400} duration={1000} triggerOnce>
                        <div className="product-default media-with-lazy left-details product-type-one">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>

                                            <span className="badge">
                                                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                            </span>
                                        </figure>
                                    </div>
                                </div>

                                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openSingleList}>
                                    <a href="javascript:;" className="trigger">
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </a>

                                    <ul className="sort-list">
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                                <span>Refresh Metadata</span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Share</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Report</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <figure>
                                <ALink href="#">
                                    <img src="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:59169797156154109360217104280470305315311955593423661085416137809818619478030/dbc3cfe8" width="271" height="271" alt="Banner" />
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title mb-1">
                                    <ALink href="#">POKErn #0003</ALink>
                                </h3>

                                <h4 className="mb-0">
                                    <ALink href="#">Highest bid 1/1</ALink>
                                </h4>

                                <div className="category-wrap d-flex align-items-center justify-content-between">
                                    <div className="category-list text-left">
                                        <ALink href="#">0.02 WETH</ALink>
                                    </div>

                                    <a href="#" className="d-flex align-items-center">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                                        <span className="ml-2">61</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-6">
                    <Reveal keyframes={fadeInUpShorter} delay={600} duration={1000} triggerOnce>
                        <div className="product-default media-with-lazy left-details product-type-one">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>

                                            <span className="badge">
                                                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                            </span>
                                        </figure>
                                    </div>
                                </div>

                                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openSingleList}>
                                    <a href="javascript:;" className="trigger">
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </a>

                                    <ul className="sort-list">
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                                <span>Refresh Metadata</span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Share</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Report</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <figure>
                                <ALink href="#">
                                    <img src="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:59169797156154109360217104280470305315311955593423661085416137809818619478019/b96445a7" width="271" height="271" alt="Banner" />
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title mb-1">
                                    <ALink href="#">POKErn #0003</ALink>
                                </h3>

                                <h4 className="mb-0">
                                    <ALink href="#">Highest bid 1/1</ALink>
                                </h4>

                                <div className="category-wrap d-flex align-items-center justify-content-between">
                                    <div className="category-list text-left">
                                        <ALink href="#">0.02 WETH</ALink>
                                    </div>

                                    <a href="#" className="d-flex align-items-center">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                                        <span className="ml-2">61</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-6">
                    <Reveal keyframes={fadeInUpShorter} delay={800} duration={1000} triggerOnce>
                        <div className="product-default media-with-lazy left-details product-type-one">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>

                                            <span className="badge">
                                                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                            </span>
                                        </figure>
                                    </div>
                                </div>

                                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openSingleList}>
                                    <a href="javascript:;" className="trigger">
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </a>

                                    <ul className="sort-list">
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                                <span>Refresh Metadata</span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Share</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Report</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <figure>
                                <ALink href="#">
                                    <img src="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:34884839299420339406790897271229401034110475657906093142123204612999123828756/7caed8b" width="271" height="271" alt="Banner" />
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title mb-1">
                                    <ALink href="#">POKErn #0003</ALink>
                                </h3>

                                <h4 className="mb-0">
                                    <ALink href="#">Highest bid 1/1</ALink>
                                </h4>

                                <div className="category-wrap d-flex align-items-center justify-content-between">
                                    <div className="category-list text-left">
                                        <ALink href="#">0.02 WETH</ALink>
                                    </div>

                                    <a href="#" className="d-flex align-items-center">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                                        <span className="ml-2">61</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-6">
                    <Reveal keyframes={fadeInUpShorter} delay={1000} duration={1000} triggerOnce>
                        <div className="product-default media-with-lazy left-details product-type-one">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>

                                            <span className="badge">
                                                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                            </span>
                                        </figure>
                                    </div>
                                </div>

                                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openSingleList}>
                                    <a href="javascript:;" className="trigger">
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </a>

                                    <ul className="sort-list">
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                                <span>Refresh Metadata</span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Share</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Report</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <figure>
                                <ALink href="#">
                                    <img src="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:59169797156154109360217104280470305315311955593423661085416137809818619478030/dbc3cfe8" width="271" height="271" alt="Banner" />
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title mb-1">
                                    <ALink href="#">POKErn #0003</ALink>
                                </h3>

                                <h4 className="mb-0">
                                    <ALink href="#">Highest bid 1/1</ALink>
                                </h4>

                                <div className="category-wrap d-flex align-items-center justify-content-between">
                                    <div className="category-list text-left">
                                        <ALink href="#">0.02 WETH</ALink>
                                    </div>

                                    <a href="#" className="d-flex align-items-center">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                                        <span className="ml-2">61</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-6">
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000} triggerOnce>
                        <div className="product-default media-with-lazy left-details product-type-one">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>

                                            <span className="badge">
                                                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                            </span>
                                        </figure>
                                    </div>
                                </div>

                                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openSingleList}>
                                    <a href="javascript:;" className="trigger">
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </a>

                                    <ul className="sort-list">
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                                <span>Refresh Metadata</span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Share</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Report</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <figure>
                                <ALink href="#">
                                    <img src="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:59169797156154109360217104280470305315311955593423661085416137809818619478019/b96445a7" width="271" height="271" alt="Banner" />
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title mb-1">
                                    <ALink href="#">POKErn #0003</ALink>
                                </h3>

                                <h4 className="mb-0">
                                    <ALink href="#">Highest bid 1/1</ALink>
                                </h4>

                                <div className="category-wrap d-flex align-items-center justify-content-between">
                                    <div className="category-list text-left">
                                        <ALink href="#">0.02 WETH</ALink>
                                    </div>

                                    <a href="#" className="d-flex align-items-center">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                                        <span className="ml-2">61</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-6">
                    <Reveal keyframes={fadeInUpShorter} delay={500} duration={1000} triggerOnce>
                        <div className="product-default media-with-lazy left-details product-type-one">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>

                                            <span className="badge">
                                                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                            </span>
                                        </figure>
                                    </div>
                                </div>

                                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openSingleList}>
                                    <a href="javascript:;" className="trigger">
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </a>

                                    <ul className="sort-list">
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                                <span>Refresh Metadata</span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Share</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Report</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <figure>
                                <ALink href="#">
                                    <img src="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:34884839299420339406790897271229401034110475657906093142123204612999123828756/7caed8b" width="271" height="271" alt="Banner" />
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title mb-1">
                                    <ALink href="#">POKErn #0003</ALink>
                                </h3>

                                <h4 className="mb-0">
                                    <ALink href="#">Highest bid 1/1</ALink>
                                </h4>

                                <div className="category-wrap d-flex align-items-center justify-content-between">
                                    <div className="category-list text-left">
                                        <ALink href="#">0.02 WETH</ALink>
                                    </div>

                                    <a href="#" className="d-flex align-items-center">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                                        <span className="ml-2">61</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-6">
                    <Reveal keyframes={fadeInUpShorter} delay={700} duration={1000} triggerOnce>
                        <div className="product-default media-with-lazy left-details product-type-one">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>

                                            <span className="badge">
                                                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                            </span>
                                        </figure>
                                    </div>
                                </div>

                                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openSingleList}>
                                    <a href="javascript:;" className="trigger">
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </a>

                                    <ul className="sort-list">
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                                <span>Refresh Metadata</span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Share</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Report</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <figure>
                                <ALink href="#">
                                    <img src="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:59169797156154109360217104280470305315311955593423661085416137809818619478030/dbc3cfe8" width="271" height="271" alt="Banner" />
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title mb-1">
                                    <ALink href="#">POKErn #0003</ALink>
                                </h3>

                                <h4 className="mb-0">
                                    <ALink href="#">Highest bid 1/1</ALink>
                                </h4>

                                <div className="category-wrap d-flex align-items-center justify-content-between">
                                    <div className="category-list text-left">
                                        <ALink href="#">0.02 WETH</ALink>
                                    </div>

                                    <a href="#" className="d-flex align-items-center">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                                        <span className="ml-2">61</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-6">
                    <Reveal keyframes={fadeInUpShorter} delay={900} duration={1000} triggerOnce>
                        <div className="product-default media-with-lazy left-details product-type-one">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>

                                            <span className="badge">
                                                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                            </span>
                                        </figure>
                                    </div>
                                </div>

                                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openSingleList}>
                                    <a href="javascript:;" className="trigger">
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </a>

                                    <ul className="sort-list">
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                                <span>Refresh Metadata</span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Share</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Report</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <figure>
                                <ALink href="#">
                                    <img src="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:59169797156154109360217104280470305315311955593423661085416137809818619478019/b96445a7" width="271" height="271" alt="Banner" />
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title mb-1">
                                    <ALink href="#">POKErn #0003</ALink>
                                </h3>

                                <h4 className="mb-0">
                                    <ALink href="#">Highest bid 1/1</ALink>
                                </h4>

                                <div className="category-wrap d-flex align-items-center justify-content-between">
                                    <div className="category-list text-left">
                                        <ALink href="#">0.02 WETH</ALink>
                                    </div>

                                    <a href="#" className="d-flex align-items-center">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                                        <span className="ml-2">61</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-6">
                    <Reveal keyframes={fadeInUpShorter} delay={1100} duration={1000} triggerOnce>
                        <div className="product-default media-with-lazy left-details product-type-one">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>
                                        </figure>
                                    </div>

                                    <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                        <figure className="product-image-circle">
                                            <ALink href="#" >
                                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                            </ALink>

                                            <span className="badge">
                                                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                            </span>
                                        </figure>
                                    </div>
                                </div>

                                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openSingleList}>
                                    <a href="javascript:;" className="trigger">
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </a>

                                    <ul className="sort-list">
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center justify-content-between" >
                                                <span>Refresh Metadata</span>
                                            </ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Share</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-block" >Report</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <figure>
                                <ALink href="#">
                                    <img src="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:59169797156154109360217104280470305315311955593423661085416137809818619478030/dbc3cfe8" width="271" height="271" alt="Banner" />
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title mb-1">
                                    <ALink href="#">POKErn #0003</ALink>
                                </h3>

                                <h4 className="mb-0">
                                    <ALink href="#">Highest bid 1/1</ALink>
                                </h4>

                                <div className="category-wrap d-flex align-items-center justify-content-between">
                                    <div className="category-list text-left">
                                        <ALink href="#">0.02 WETH</ALink>
                                    </div>

                                    <a href="#" className="d-flex align-items-center">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                                        <span className="ml-2">61</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

            <button type="button" className="btn btn-loadmore w-100 text-transform-none mb-4"><span>Load more</span></button>
        </section>
    );
}