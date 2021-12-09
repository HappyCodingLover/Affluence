import { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeInUpShorter } from '../../../utils/data/keyframes'

export default function HotCollection() {
    return (
        <section className="featured-products-section">
            <h2 className="section-title ls-n-10 m-b-2 border-0 d-flex align-items-center">Hot collections <img className="ml-2" src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f4a5.png" width="30" height="30" alt="Item"/></h2>

            <OwlCarousel adClass="products-slider owl-theme m-b-1 pb-1 owl-nav-circle" options={productSlider}>
                <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000} triggerOnce>
                    <div className="product-default media-with-lazy product-type-one product-custom-img">
                        <figure>
                            <ALink href="#">
                                <img src="https://img.rarible.com/prod/image/upload/t_cover_preview/prod-collections/0x7eef591a6cc0403b9652e98e88476fe1bf31ddeb/cover/QmXG75jA1bYL91Kr4UqRcKFozCfkxJ7rQ4hWg1Hnw3WzNZ" width="249" height="90" alt="Banner"/>
                            </ALink>

                            <ALink href="#">
                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x918f677b3ab4b9290ca96a95430fd228b2d84817/avatar/QmYSAQzTnoHe5bWzTtVrnB9dt6ck6pqNuWgdu2c3ekQeoP" width="249" height="90" alt="Banner"/>
                            </ALink>
                        </figure>

                        <div className="product-details mt-3">
                            <h3 className="product-title">
                                <ALink href="#">JRNY NFT Club</ALink>
                            </h3>

                            <h4 className="price-box mb-0">$8,063,159</h4>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce>
                    <div className="product-default media-with-lazy product-type-one product-custom-img">
                        <figure>
                            <ALink href="#">
                                <img src="https://img.rarible.com/prod/image/upload/t_cover_preview/prod-collections/0xde6b6090d32eb3eeae95453ed14358819ea30d33/cover/QmexDtwMh3322DWjKfHZaE2BKJNmRfkQN9PYU8EgDo29U5" width="249" height="90" alt="Banner"/>
                            </ALink>

                            <ALink href="#">
                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xde6b6090d32eb3eeae95453ed14358819ea30d33/avatar/QmeTJuQpr69bJyo77qWLPovUTHqNQx5qWqbdXrUXemAZhM" width="249" height="90" alt="Banner"/>
                            </ALink>
                        </figure>

                        <div className="product-details mt-3">
                            <h3 className="product-title">
                                <ALink href="#">JRNY NFT Club</ALink>
                            </h3>

                            <h4 className="price-box mb-0">$8,063,159</h4>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000} triggerOnce>
                    <div className="product-default media-with-lazy product-type-one product-custom-img">
                        <figure>
                            <ALink href="#">
                                <img src="https://img.rarible.com/prod/image/upload/t_cover_preview/prod-collections/0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a/cover/QmdPr6CjC9rRpyYpRvrxP7YAEgZK2UgcPpmBhLzUwQ9iQs" width="249" height="90" alt="Banner"/>
                            </ALink>

                            <ALink href="#">
                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a/avatar/QmWSu76RE2jsun8Ch8f3Kzz3MuXr7ZhcbbVL1EKxDKsQ8V" width="249" height="90" alt="Banner"/>
                            </ALink>
                        </figure>

                        <div className="product-details mt-3">
                            <h3 className="product-title">
                                <ALink href="#">JRNY NFT Club</ALink>
                            </h3>

                            <h4 className="price-box mb-0">$8,063,159</h4>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={400} duration={1000} triggerOnce>
                    <div className="product-default media-with-lazy product-type-one product-custom-img">
                        <figure>
                            <ALink href="#">
                                <img src="https://img.rarible.com/prod/image/upload/t_cover_preview/prod-collections/0x114eb0911f5f585f1eee825bad4afad1774babbd/cover/Qmdvsd5BCmaqCLfDns41wvYgo4RWkTYdVre2Z2jQSy4jw4" width="249" height="90" alt="Banner"/>
                            </ALink>

                            <ALink href="#">
                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x114eb0911f5f585f1eee825bad4afad1774babbd/avatar/QmcxSWzwDa7Ly6DfsnNzBV2yGB8TQtcxXMG7EstB2KnzGf" width="249" height="90" alt="Banner"/>
                            </ALink>
                        </figure>

                        <div className="product-details mt-3">
                            <h3 className="product-title">
                                <ALink href="#">JRNY NFT Club</ALink>
                            </h3>

                            <h4 className="price-box mb-0">$8,063,159</h4>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={500} duration={1000} triggerOnce>
                    <div className="product-default media-with-lazy product-type-one product-custom-img">
                        <figure>
                            <ALink href="#">
                                <img src="https://img.rarible.com/prod/image/upload/t_cover_preview/prod-collections/0x608b462865dd093c2e013cd8892d6d298aa42089/cover/QmfNCqzr1NwxLXytpjiToChKaWZeawMGb6CyKt6y2DDV2d" width="249" height="90" alt="Banner"/>
                            </ALink>

                            <ALink href="#">
                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x608b462865dd093c2e013cd8892d6d298aa42089/avatar/QmZVUWakHNMKA12bs8RquTCTGWDnMYeiNMoL4t3jM9yyDs" width="249" height="90" alt="Banner"/>
                            </ALink>
                        </figure>

                        <div className="product-details mt-3">
                            <h3 className="product-title">
                                <ALink href="#">JRNY NFT Club</ALink>
                            </h3>

                            <h4 className="price-box mb-0">$8,063,159</h4>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000} triggerOnce>
                    <div className="product-default media-with-lazy product-type-one product-custom-img">
                        <figure>
                            <ALink href="#">
                                <img src="https://img.rarible.com/prod/image/upload/t_cover_preview/prod-collections/0x7eef591a6cc0403b9652e98e88476fe1bf31ddeb/cover/QmXG75jA1bYL91Kr4UqRcKFozCfkxJ7rQ4hWg1Hnw3WzNZ" width="249" height="90" alt="Banner"/>
                            </ALink>

                            <ALink href="#">
                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x918f677b3ab4b9290ca96a95430fd228b2d84817/avatar/QmYSAQzTnoHe5bWzTtVrnB9dt6ck6pqNuWgdu2c3ekQeoP" width="249" height="90" alt="Banner"/>
                            </ALink>
                        </figure>

                        <div className="product-details mt-3">
                            <h3 className="product-title">
                                <ALink href="#">JRNY NFT Club</ALink>
                            </h3>

                            <h4 className="price-box mb-0">$8,063,159</h4>
                        </div>
                    </div>
                </Reveal>
            </OwlCarousel>
        </section>
    );
}