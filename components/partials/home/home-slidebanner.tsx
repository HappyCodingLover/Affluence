import OwlCarousel from '../../features/owl-carousel';

export default function IntroSection() {
    return (
        <OwlCarousel adClass="home-slider owl-theme owl-nav-circle mb-2" options={{
            nav: true,
            dots: false,
            loop: false,
            navText: ['<svg viewBox="0 0 16 16" fill="none" width="16" height="16"  style="transform: rotate(90deg);"><path fillRule="evenodd" clipRule="evenodd" d="M8 11.4143L12.7071 6.7072C13.0976 6.31668 13.0976 5.68351 12.7071 5.29299C12.3166 4.90246 11.6834 4.90246 11.2929 5.29299L8 8.58588L4.70711 5.29299C4.31658 4.90246 3.68342 4.90246 3.29289 5.29299C2.90237 5.68351 2.90237 6.31668 3.29289 6.7072L8 11.4143Z" fill="currentColor"></path></svg>', '<svg viewBox="0 0 16 16" fill="none" width="16" height="16"  style="transform: rotate(-90deg);"><path fillRule="evenodd" clipRule="evenodd" d="M8 11.4143L12.7071 6.7072C13.0976 6.31668 13.0976 5.68351 12.7071 5.29299C12.3166 4.90246 11.6834 4.90246 11.2929 5.29299L8 8.58588L4.70711 5.29299C4.31658 4.90246 3.68342 4.90246 3.29289 5.29299C2.90237 5.68351 2.90237 6.31668 3.29289 6.7072L8 11.4143Z" fill="currentColor"></path></svg>']
        }}>
            <div className="home-slide home-slide-1">
                <div className="grid-layout">
                    <div className="height-x2 overflow-hidden default-rounded">
                        <OwlCarousel adClass="owl-theme default-rounded overflow-hidden h-100" options={{
                                nav: false,
                                dots: false,
                                loop: true,
                                autoplay: true,
                                autoplayTimeout: 5000
                            }}>
                            <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                                <video src="https://img.rarible.com/feat/video/webm/x2/28135f356a6edb9b671335dc706e54c1/49575785/82c0613f.mp4" className="w-100" 
                                    autoPlay={ true } 
                                    loop={ true } 
                                    muted= { true }
                                    playsInline={ true }>
                                </video>
                            </div>

                            <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                                <video src="https://img.rarible.com/feat/video/webm/x2/b501fc9c833fdb7cb79f15c5eb5fc7b6/e2b9798c/KIWIE1001NFTDROP21STNOV.mp4" className="w-100" 
                                    autoPlay={ true } 
                                    loop={ true } 
                                    muted= { true }
                                    playsInline={ true }>
                                </video>
                            </div>

                            <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                                <video src="https://img.rarible.com/feat/video/webm/x2/151ca41718cefc5571416b95420aff27/8ecacd53/rarible.mp4" className="w-100" 
                                    autoPlay={ true } 
                                    loop={ true } 
                                    muted= { true }
                                    playsInline={ true }>
                                </video>
                            </div>
                        </OwlCarousel>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                            <video src="https://img.rarible.com/feat/video/webm/x1/853a00fb0050ef52aafffdfa9b93fa9d/ffb455c7/Rarible_Ligerslides_promoreel_V3.mp4" className="w-100" 
                                autoPlay={ true } 
                                loop={ true } 
                                muted= { true }
                                playsInline={ true }>
                            </video>

                            <div className="banner-layer">
                                <h2 className="mb-0">Liger Slides</h2>
                            </div>
                        </div>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                            <video src="https://img.rarible.com/feat/video/webm/x1/bfd3333ba23c205b83b1cf2f46c44ff8/6f37f5b5/rarible_square.mp4" className="w-100" 
                                autoPlay={ true } 
                                loop={ true } 
                                muted= { true }
                                playsInline={ true }>
                            </video>

                            <div className="banner-layer">
                                <h2 className="mb-0 text-white">CHRONO ORDER</h2>
                            </div>
                        </div>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                            <img src="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/fe3d44355cfd3cdb0be64a19ff9fcdac/18fc0d56/Screenshot2021-11-17at22_36_35.png" width="271" height="271" alt="Banner"/>

                            <div className="banner-layer">
                                <h2 className="mb-0 text-white">Tranquility</h2>
                            </div>
                        </div>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                            <video src="https://img.rarible.com/feat/video/webm/x1/27d9e1c3ddddb57505fa334df58de58e/d5cd3fce/LOOPEDTYPEFACES_6-10_800x800.mp4" className="w-100" 
                                autoPlay={ true } 
                                loop={ true } 
                                muted= { true }
                                playsInline={ true }>
                            </video>

                            <div className="banner-layer">
                                <h2 className="mb-0 text-white">Type Faces</h2>
                            </div>
                        </div>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                        <img src="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/47fe12dbc53259c38bd513463584cbde/ccd10fb4/Screenshot2021-11-17at22_38_03.png" width="271" height="271" alt="Banner"/>

                            <div className="banner-layer">
                                <h2 className="mb-0 text-white">Liger Slides</h2>
                            </div>
                        </div>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                            <video src="https://img.rarible.com/feat/video/webm/x1/d6a7124ecd9ee23047455fd6b21fef23/9328f25f/coverpromo.mp4" className="w-100" 
                                autoPlay={ true } 
                                loop={ true } 
                                muted= { true }
                                playsInline={ true }>
                            </video>

                            <div className="banner-layer">
                                <h2 className="mb-0 text-white">CCSC Comics #1</h2>
                            </div>
                        </div>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded min-xs-hidden">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                        <img src="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/5e0eaf0bbd9c0f4bb63d389958627d0a/0af434c5/Watcher.png" width="271" height="271" alt="Banner"/>

                            <div className="banner-layer">
                                <h2 className="mb-0 text-white">Liger Slides</h2>
                            </div>
                        </div>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded min-xs-hidden">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                            <video src="https://img.rarible.com/feat/video/webm/x1/50fff8e9f37c5ff65bfefa541587af5b/d3ecf437/CYBER_HALLOWEEN_Trailer.mp4" className="w-100" 
                                autoPlay={ true } 
                                loop={ true } 
                                muted= { true }
                                playsInline={ true }>
                            </video>

                            <div className="banner-layer">
                                <h2 className="mb-0 text-white">CCSC Comics #1</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-slide">
                <div className="grid-layout">
                    <div className="height-x1 overflow-hidden default-rounded">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                            <video src="https://img.rarible.com/feat/video/webm/x1/b0aa60974dd96bcc3903bc74c275e017/76986385/TMM-MUFFIN.mp4" className="w-100" 
                                autoPlay={ true } 
                                loop={ true } 
                                muted= { true }
                                playsInline={ true }>
                            </video>

                            <div className="banner-layer">
                                <h2 className="mb-0">Take My Muffin</h2>
                            </div>
                        </div>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                            <video src="https://img.rarible.com/feat/video/webm/x1/c59a3f5c309dcd18114e2ba708e04213/82c1b1df/Cryptogirl-Rarible.mp4" className="w-100" 
                                autoPlay={ true } 
                                loop={ true } 
                                muted= { true }
                                playsInline={ true }>
                            </video>

                            <div className="banner-layer">
                                <h2 className="mb-0 text-white">Crypto Girl</h2>
                                <h4 className="mb-0">Series 2</h4>
                            </div>
                        </div>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                            <img src="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/647ef54be909a2739fc9a31fed1a3181/fac4fd04/Screenshot2021-11-24at14_26_14.png" width="271" height="271" alt="Banner"/>

                            <div className="banner-layer">
                                <h2 className="mb-0 text-white">Benny Cools</h2>
                            </div>
                        </div>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                            <video src="https://img.rarible.com/feat/video/webm/x1/caf3ed81996f18e48c651f6030a26f33/d494f23a/Rarible_Cover_5.mp4" className="w-100" 
                                autoPlay={ true } 
                                loop={ true } 
                                muted= { true }
                                playsInline={ true }>
                            </video>

                            <div className="banner-layer">
                                <h2 className="mb-0 text-white">The Drops</h2>
                            </div>
                        </div>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                            <img src="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/8f5475aef95045f71bd27a14ae591988/75b44bf0/Screenshot2021-11-24at14_02_25.png" width="271" height="271" alt="Banner"/>

                            <div className="banner-layer">
                                <h2 className="mb-0 text-white">R66 #013 // henpai</h2>
                                <h4 className="mb-0">by R66 Toys</h4>
                            </div>
                        </div>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                            <img src="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/0cc48a0e7c21fdad060fd8a0b5b5bddd/5d412118/Screenshot2021-11-16at22.16.51.png" width="271" height="271" alt="Banner"/>

                            <div className="banner-layer">
                                <h2 className="mb-0 text-white">Mutant Ape YC</h2>
                            </div>
                        </div>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                            <video src="https://img.rarible.com/feat/video/webm/x1/e873f8929ff8f6e7751b4f137db7257a/f2a7690b/JakeRossRaribleHomepage.mp4" className="w-100" 
                                autoPlay={ true } 
                                loop={ true } 
                                muted= { true }
                                playsInline={ true }>
                            </video>

                            <div className="banner-layer">
                                <h2 className="mb-0 text-white">Jake Ross</h2>
                            </div>
                        </div>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                            <video src="https://img.rarible.com/feat/video/webm/x1/51e7654f976be70c645868246c0916a5/6641da83/ezgif_com-gif-maker.mp4" className="w-100" 
                                autoPlay={ true } 
                                loop={ true } 
                                muted= { true }
                                playsInline={ true }>
                            </video>

                            <div className="banner-layer">
                                <h2 className="mb-0 text-white">STACY</h2>
                            </div>
                        </div>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                            <video src="https://img.rarible.com/feat/video/webm/x1/3c2b24bf34e0148531236c064b0f6bd8/6aa14f07/Ethblockgif.mp4" className="w-100" 
                                autoPlay={ true } 
                                loop={ true } 
                                muted= { true }
                                playsInline={ true }>
                            </video>

                            <div className="banner-layer">
                                <h2 className="mb-0 text-white">ETH Blocks</h2>
                            </div>
                        </div>
                    </div>

                    <div className="height-x1 overflow-hidden default-rounded">
                        <div className="banner video-banner banner-md-vw h-100 banner-sm-vw d-flex align-items-center overflow-hidden default-rounded">
                            <video src="https://img.rarible.com/feat/video/webm/x1/fee1c15035de1e40e34c2718ad4f92b2/373e37c9/FDtN-QJXoAMpeYh.mp4" className="w-100" 
                                autoPlay={ true } 
                                loop={ true } 
                                muted= { true }
                                playsInline={ true }>
                            </video>

                            <div className="banner-layer">
                                <h2 className="mb-0 text-white">✽ BOTANICA ✽</h2>
                                <h4 className="mb-0">REBIRTH</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    )
}