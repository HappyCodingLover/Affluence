import { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes'

export default function TopCollection ( ) {
    function openList(e) {
        e.currentTarget.classList.toggle('opened');
    }

    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } >
            <section className="products-scroll-section mt-4">
                <h2 className="section-title heading-border ls-n-10 border-0 text-capitalize d-flex align-items-center">
                    Top collections in
                    <div className="toolbox-item toolbox-sort select-custom mb-0 d-flex align-items-center" onClick={openList}>
                        <a href="javascript:;" className="sort-menu-trigger">1 day</a>
                        <svg viewBox="0 0 16 16" fill="none" width="16" height="16"  className="sc-bdnxRM sc-hKFxyN kRuSvk"><path fillRule="evenodd" clipRule="evenodd" d="M8 11.4143L12.7071 6.7072C13.0976 6.31668 13.0976 5.68351 12.7071 5.29299C12.3166 4.90246 11.6834 4.90246 11.2929 5.29299L8 8.58588L4.70711 5.29299C4.31658 4.90246 3.68342 4.90246 3.29289 5.29299C2.90237 5.68351 2.90237 6.31668 3.29289 6.7072L8 11.4143Z" fill="currentColor"></path></svg>
                        <ul className="sort-list">
                            <li className="active">
                                <ALink href="#" className="d-flex align-items-center justify-content-between">
                                    <span>1 day</span>
                                    <svg viewBox="0 0 14 11" fill="none" width="16" height="16"  className="sc-bdnxRM sc-hKFxyN cCoyfS"><path d="M1 5L5 9L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                                </ALink>
                            </li>
                            <li>
                                <ALink href="#" className="d-block">7 days</ALink>
                            </li>
                            <li>
                                <ALink href="#" className="d-block">30 days</ALink>
                            </li>
                        </ul>
                    </div>
                </h2>

                <div className="row custom-srcollbar">
                    <div className="col-xl-5col col-lg-3 col-sm-4 col-6">
                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">1</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE3MiwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE3MiwxKTsgc3Ryb2tlLXdpZHRoOjAuMjQ7Jz48cmVjdCAgeD0nMjInIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjInIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48L2c+PC9zdmc+" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">2</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a/avatar/QmWSu76RE2jsun8Ch8f3Kzz3MuXr7ZhcbbVL1EKxDKsQ8V" width="48" height="48" alt="Game"/>
                                </ALink>
                                <span className="badge">
                                    <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                </span>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">3</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDIwNCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDM4LDIwNCwxKTsgc3Ryb2tlLXdpZHRoOjAuMjQ7Jz48cmVjdCAgeD0nMjInIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxOCcgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjYnIHk9JzIyJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PSczMCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScyMicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48L2c+PC9zdmc+" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5col col-lg-3 col-sm-4 col-6">
                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">4</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTIwLDIxNywzOCwxKTsgc3Ryb2tlOnJnYmEoMTIwLDIxNywzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMjQ7Jz48cmVjdCAgeD0nMjInIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjInIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScxNCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMTQnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxOCcgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjYnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PSczMCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMzAnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTQnIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzMwJyB5PScxNCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScyMicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTQnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzMwJyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMzAnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PC9nPjwvc3ZnPg==" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">5</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x099689220846644f87d1137665cded7bf3422747/avatar/QmQbccLZzddkSXM7uZopSLrdYUxXyWEh2uMGBJBihEpJ36" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">6</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDE5NiwxKTsgc3Ryb2tlOnJnYmEoMjE3LDM4LDE5NiwxKTsgc3Ryb2tlLXdpZHRoOjAuMjQ7Jz48cmVjdCAgeD0nMjInIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjInIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PSczMCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxOCcgeT0nMTQnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjYnIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzIyJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PScyMicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxOCcgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjYnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTQnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzMwJyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjwvZz48L3N2Zz4=" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5col col-lg-3 col-sm-4 col-6">
                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">7</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDYwLDEpOyBzdHJva2U6cmdiYSgyMTcsMzgsNjAsMSk7IHN0cm9rZS13aWR0aDowLjI0Oyc+PHJlY3QgIHg9JzIyJyB5PScxNCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjInIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScxNCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMTQnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMTQnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48L2c+PC9zdmc+" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">8</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x60e4d786628fea6478f785a6d7e704777c86a7c6/avatar/QmaoafyjBy97NKEPZzAD3FK8RcwCJHb263dDJbhCaXPWpo" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">9</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x8a90cab2b38dba80c64b7734e58ee1db38b8992e/avatar/QmVqUTEU7NCjGBYzswoeb5vK6HoQ12YJhM1k3QNYDzmGty" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5col col-lg-3 col-sm-4 col-6">
                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">10</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/avatar/QmfNrXe67J4t1EvXLxPhxTavQCLryurWFj1DDRKkjNQqit" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">11</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/avatar/QmfNrXe67J4t1EvXLxPhxTavQCLryurWFj1DDRKkjNQqit" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">12</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDg5LDM4LDEpOyBzdHJva2U6cmdiYSgyMTcsODksMzgsMSk7IHN0cm9rZS13aWR0aDowLjI0Oyc+PHJlY3QgIHg9JzIyJyB5PScxNCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjInIHk9JzIyJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxOCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjYnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScxNCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMTQnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTQnIHk9JzIyJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzMwJyB5PScyMicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PSczMCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMzAnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48L2c+PC9zdmc+" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5col col-lg-3 col-sm-4 col-6">
                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">13</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDE5NiwxKTsgc3Ryb2tlOnJnYmEoMjE3LDM4LDE5NiwxKTsgc3Ryb2tlLXdpZHRoOjAuMjQ7Jz48cmVjdCAgeD0nMjInIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjInIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PSczMCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxOCcgeT0nMTQnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjYnIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzIyJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PScyMicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxOCcgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjYnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTQnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzMwJyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjwvZz48L3N2Zz4=" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">14</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xad9fd7cb4fc7a0fbce08d64068f60cbde22ed34c/avatar/QmRzEASVDqSuLeZGvVJeSnvzs8eBexYiSDXd9nuFhVYh7L" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">15</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTA5LDIxNywzOCwxKTsgc3Ryb2tlOnJnYmEoMTA5LDIxNywzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMjQ7Jz48cmVjdCAgeD0nMjInIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjInIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScxNCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMTQnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PSczMCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzIyJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTQnIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzMwJyB5PSczMCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjwvZz48L3N2Zz4=" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5col col-lg-3 col-sm-4 col-6">
                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">16</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDYwLDEpOyBzdHJva2U6cmdiYSgyMTcsMzgsNjAsMSk7IHN0cm9rZS13aWR0aDowLjI0Oyc+PHJlY3QgIHg9JzIyJyB5PScxNCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjInIHk9JzIyJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PSczMCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxOCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjYnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScyMicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMTQnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTQnIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzMwJyB5PSczMCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjwvZz48L3N2Zz4=" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">17</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/avatar/QmcJMTboitFVH7TxZAxpNjhnBfREHLtw2ow8cuAoeV7yxr" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-default media-with-lazy left-details product-widget align-items-center">
                            <span className="product-number mr-4">18</span>
                            <figure className="product-image-circle">
                                <ALink href="#" >
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE0MiwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE0MiwxKTsgc3Ryb2tlLXdpZHRoOjAuMjQ7Jz48cmVjdCAgeD0nMjInIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjInIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzIyJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PScyMicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxOCcgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjYnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PSczMCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMzAnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTQnIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzMwJyB5PScxNCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScyMicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48L2c+PC9zdmc+" width="48" height="48" alt="Game"/>
                                </ALink>
                            </figure>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="#">JRNY NFT Club</ALink>
                                </h3>

                                <div className="price-box">
                                    <span className="product-price">$8,063,159</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}