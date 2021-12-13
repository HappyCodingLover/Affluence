import { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeInUpShorter } from '../../../utils/data/keyframes'

export default function LiveCollection() {
    function openList(e) {
        e.currentTarget.classList.toggle('opened');
    }

    return (
        <section className="featured-products-section">
            <h2 className="section-title ls-n-10 m-b-2 border-0 d-flex align-items-center">Live auctions <img className="ml-2" src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f525.png" width="30" height="30" alt="Item" /></h2>

            <OwlCarousel adClass="products-slider owl-theme m-b-1 pb-1 owl-nav-circle" options={productSlider}>
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

                            <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openList}>
                                <a href="" className="trigger">
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

                            <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openList}>
                                <a href="" className="trigger">
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

                            <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openList}>
                                <a href="" className="trigger">
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

                            <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openList}>
                                <a href="" className="trigger">
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

                            <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openList}>
                                <a href="" className="trigger">
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

                            <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openList}>
                                <a href="" className="trigger">
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

                            <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0" onClick={openList}>
                                <a href="" className="trigger">
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
            </OwlCarousel>
        </section>
    );
}