import React, { useEffect } from 'react';

// Import Custom Component
import ALink from '../../common/ALink';
import BgImage from '../../common/BgImage';
import Tippy from '../../common/Tippy';

// Import Settings

// You can now get a ref directly to the DOM button:
export default function Assembly() {
    const mosesRef = (
        <div className="user-card">
            <div className="user-card-top">
                <div className="position-relative">
                    <div className="">
                        <ALink href="/@moses">
                            <BgImage url="https://f8n-production.imgix.net/creators/profile/a5yzrxx9i-moses-2214-1-jpg-4jmr8l.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" size="mediumn" />
                        </ALink>
                        <div className="pt-3">
                            <h2 className="">Moses Sumney</h2>
                            <h4 className="gradient-title">@moses</h4>
                        </div>
                    </div>
                    <div className="btn-action">
                        <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent text-light-hover bg-dark-hover">
                            Follow
                        </button>
                    </div>
                </div>
                <div className="pt-1">
                    <h5 className="mb-0 mr-3">Interdisciplinary.</h5>
                    <div className="d-flex align-items-center py-3">
                        <h5 className="mb-0 mr-3">Followed by</h5>
                        <div className="d-flex">
                            <ALink href="/@charliedamgood">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/ej0oce2xa-390022-1918221999775-345692629-n-jpg-j9r5xu.jpg?q=45&amp;w=32&amp;h=32&amp;auto=format%2Ccompress&amp;fit=crop&amp;dpr=2" bgSize="cover" position="center center" width="32" height="32" />
                            </ALink>
                            <ALink href="/@earthtosam">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/z5lfuthbo-iqdz1oon-400x400-jpeg-wt0tgr.jpeg?q=45&amp;w=32&amp;h=32&amp;auto=format%2Ccompress&amp;fit=crop&amp;dpr=2" bgSize="cover" position="center center" width="32" height="32" />
                            </ALink>
                            <ALink href="/@besaraba">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/vppohfpqt-mg-8772-passportsquares-jpg-8xdow1.jpg?q=45&amp;w=32&amp;h=32&amp;auto=format%2Ccompress&amp;fit=crop&amp;dpr=2" bgSize="cover" position="center center" width="32" height="32" />
                            </ALink>
                            <ALink href="/@patrou">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/vppohfpqt-mg-8772-passportsquares-jpg-8xdow1.jpg?q=45&amp;w=32&amp;h=32&amp;auto=format%2Ccompress&amp;fit=crop&amp;dpr=2" bgSize="cover" position="center center" width="32" height="32" />
                            </ALink>
                            <ALink href="/@Kinlaw">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/euyu4c2fj-2020-09-07-kinlaw-1278-1-easy-resize-com-jpg-aht4lu.jpg?q=45&amp;w=32&amp;h=32&amp;auto=format%2Ccompress&amp;fit=crop&amp;dpr=2" bgSize="cover" position="center center" width="32" height="32" />
                            </ALink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-card-bottom">
                <ALink href="/@moses?follows=true" className="mr-3">
                    <h5 className="follows">4</h5>
                    <h6 className="text-gray">Following</h6>
                </ALink>
                <ALink href="/@moses?follows=true">
                    <h5 className="follows">358</h5>
                    <h6 className="text-gray">Followers</h6>
                </ALink>
            </div>
        </div>
    )
    
    const litmusearthRef = (
        <div className="user-card">
            <div className="user-card-top">
                <div className="position-relative">
                    <div className="">
                        <ALink href="/@litmusearth">
                            <BgImage url="https://f8n-production.imgix.net/creators/profile/hmayjm73p-000217070009-jpg-5bdui9.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" size="mediumn" />
                        </ALink>
                        <div className="pt-3">
                            <h2 className="">jacob frazer</h2>
                            <h4 className="gradient-title">@litmusearth</h4>
                        </div>
                    </div>
                    <div className="btn-action">
                        <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent text-light-hover bg-dark-hover">
                            Follow
                        </button>
                    </div>
                </div>
                <div className="pt-1">
                    <h5 className="mb-0 mr-3">California-based director/photographer & collector</h5>
                    <div className="d-flex align-items-center py-3">
                        <h5 className="mb-0 mr-3">Followed by</h5>
                        <div className="d-flex">
                            <ALink href="/@GoldCubeNFT">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/9piypivrl-box-gif-bm9bip.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" width="32" height="32" />
                            </ALink>
                            <ALink href="/@GLADIARTER">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/hxlpxty05-l9lams0r-400x400-jpg-f5q42u.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" width="32" height="32" />
                            </ALink>
                            <ALink href="/@bg">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/xf24shkyy-bglogo-gif-sbt73s.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" width="32" height="32" />
                            </ALink>
                            <ALink href="/@elraart">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/0nfc7y2k8-edom-png-0madpu.png?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" width="32" height="32" />
                            </ALink>
                            <ALink href="/@noombuddhanuwat">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/wm3ivumg8-img-5019-jpg-u3przm.JPG?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" width="32" height="32" />
                            </ALink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-card-bottom">
                <ALink href="/@moses?follows=true" className="mr-3">
                    <h5 className="follows">4</h5>
                    <h6 className="grey-text">Following</h6>
                </ALink>
                <ALink href="/@moses?follows=true">
                    <h5 className="follows">358</h5>
                    <h6 className="grey-text">Followers</h6>
                </ALink>
            </div>
        </div>
    )

    const x157Ref = (
        <div className="user-card">
            <div className="user-card-top">
                <div className="position-relative">
                    <div className="">
                        <ALink href="/0x17579F61bb21FD62B91Dd450b4ae47ba3B77af81">
                            <BgImage color="linear-gradient(135deg, rgb(82, 63, 239), rgb(253, 34, 173))" bgSize="cover" position="center center" size="mediumn" />
                        </ALink>
                        <div className="pt-3">
                            <h2 className="">0x1757...af81</h2>
                            <h4 className="gradient-title"></h4>
                        </div>
                    </div>
                    <div className="btn-action">
                        <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent text-light-hover bg-dark-hover">
                            Follow
                        </button>
                    </div>
                </div>
                <div className="pt-1">
                    <h5 className="mb-0 mr-3"></h5>
                    <div className="d-flex align-items-center py-3">
                        <h5 className="mb-0 mr-3">Followed by</h5>
                        <div className="d-flex">
                            <ALink href="/@kubraboy">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/qtrj5to6m-nft-jfif-j9hbai.jfif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" width="32" height="32" />
                            </ALink>
                            <ALink href="/@officialivelina">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/g79cjingd-10-png-12bmmt.png?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" width="32" height="32" />
                            </ALink>
                            <ALink href="/@CRYPTO-CARS">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/vjyta7moe-logo-png-y99lum.png?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" width="32" height="32" />
                            </ALink>
                            <ALink href="/@GoldCubeNFT">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/9piypivrl-box-gif-bm9bip.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" width="32" height="32" />
                            </ALink>
                            <ALink href="/@Hakinar">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/tsvp8tdeb-bipol-gif-7uhd0k.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" width="32" height="32" />
                            </ALink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-card-bottom">
                <ALink href="/@moses?follows=true" className="mr-3">
                    <h5 className="follows">4</h5>
                    <h6 className="text-gray">Following</h6>
                </ALink>
                <ALink href="/@moses?follows=true">
                    <h5 className="follows">358</h5>
                    <h6 className="text-gray">Followers</h6>
                </ALink>
            </div>
        </div>
    )

    return (
        <section className="assembly-section mt-5 mb-3">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="ls-n-10 mb-3 border-0 d-flex align-items-center">Assembly #1</h1>
                    
                    <ALink href="https://etherscan.io/tx/0x38c9dee9faacc1eece3cdf7fa99dd4ccc27a25ccf181f0e8f1a9513b433261ca">
                        Minted on Dec 1, 2021
                        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" height="16" width="16" className="ml-2">
                            <path d="M15 0H8v2h4.6L6.3 8.3l1.4 1.4L14 3.4V8h2V1c0-.6-.4-1-1-1z" fill="currentColor"></path>
                            <path d="M14 16H1c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h4v2H2v11h11v-3h2v4c0 .6-.4 1-1 1z" fill="currentColor"></path>
                        </svg>
                    </ALink>
                </div>
            </div>
            <div className="row pt-6 mb-10">
                <div className="col-md-6">
                    <div className="d-flex flex-column">
                        <p>Created by</p>
                        <div className="d-flex">
                            <div className="box-card">
                                <Tippy tippyRef={mosesRef} position="bottom" className="d-flex py-3 pl-3 pr-5">
                                    <ALink href="/@moses">
                                        <div className="d-flex align-items-center">
                                            <BgImage url="https://f8n-production.imgix.net/creators/profile/a5yzrxx9i-moses-2214-1-jpg-4jmr8l.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" size="small" />
                                            <div>@moses</div>
                                        </div>
                                    </ALink>
                                </Tippy>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex bl-gray">
                    <div className="px-5">
                        <div>Sold for</div>
                        <h2 className="mb-0">1.40 ETH</h2>
                        <div>$6,093.46</div>
                    </div>
                    <div className="px-5">
                        <div className="">Owned by</div>
                        <div className="d-flex">
                            <div className="box-card">
                                <Tippy tippyRef={litmusearthRef} position="bottom" className="d-flex py-3 pl-3 pr-5">
                                    <ALink href="/@litmusearth">
                                        <div className="d-flex align-items-center">
                                            <BgImage url="https://f8n-production.imgix.net/creators/profile/hmayjm73p-000217070009-jpg-5bdui9.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" size="small" />
                                            <div>@litmusearth</div>
                                        </div>
                                    </ALink>
                                </Tippy>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <h2 className="block-title">Description</h2>
                        <p>In "Assembly #1," I enter a vinyl manufacturing plant and self-press a special edition of my new album "Live From Blackalachia." At the end of the voyeuristic film, I hold the finished record up along with its edition number: #1.</p>
                        <p>Purchase of this NFT will include this video and the signed vinyl record I pressed in the film, shipped to the winner of the auction.</p>
                        <p>Assembled at Citizen Vinyl in Asheville North Carolina on November 23rd, 2021, the disc features a unique splatter pattern and a scannable-by-phone Vinylkey chip that links to proof of ownership.</p>
                        <p>Find images of the vinyl here:<br/>www.mosessumney.com/assembly</p>
                        <hr className="my-4"/>
                        <p>vinylkey #10100443354A2F7080</p>
                    </div>
                    <div>
                        <h2 className="block-title">Details</h2>
                        <div className="py-2">
                            <ALink className="d-flex align-items-center py-3" href="https://etherscan.io/token/0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405?a=113025">
                                <svg className="mr-3" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.364 9.999a.89.89 0 01.895-.89l1.482.004a.891.891 0 01.891.892v5.607c.167-.05.381-.102.616-.157a.743.743 0 00.572-.723V7.776a.892.892 0 01.892-.892h1.485a.891.891 0 01.891.892v6.456s.372-.15.734-.304a.744.744 0 00.454-.685V5.547a.891.891 0 01.892-.891h1.485a.891.891 0 01.891.891v6.337c1.288-.933 2.593-2.056 3.628-3.406A1.496 1.496 0 0020.4 7.08 10.483 10.483 0 0010.632 0C4.811-.077 0 4.677 0 10.501a10.47 10.47 0 001.394 5.252 1.327 1.327 0 001.266.656c.28-.024.63-.06 1.046-.108a.742.742 0 00.659-.737V9.999M4.332 18.991a10.493 10.493 0 0016.641-9.21c-3.834 5.721-10.915 8.396-16.64 9.21" fill="currentColor"></path></svg>
                                View on Etherscan
                            </ALink>
                            <ALink className="d-flex align-items-center py-3" href="https://ipfs.io/ipfs/QmUER7X4AK5E9d2K4QvBTALRMfdtcExURdmqfrrQbqoDeh/metadata.json">
                                <svg className="mr-3" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.21 5.222L10.639.936a1.428 1.428 0 00-1.279 0L.789 5.222A1.431 1.431 0 000 6.5v10c0 .54.306 1.035.79 1.278l8.571 4.286a1.43 1.43 0 001.278 0l8.571-4.286A1.43 1.43 0 0020 16.5v-10a1.43 1.43 0 00-.79-1.278zM10 3.812L15.377 6.5 10 9.189 4.623 6.501 10 3.81zm-7.143 5l5.714 2.857v6.806l-5.714-2.857V8.812zm8.572 9.663v-6.806l5.714-2.857v6.806l-5.714 2.857z" fill="currentColor"></path></svg>
                                View metadata
                            </ALink>
                            <ALink className="d-flex align-items-center py-3" href="https://ipfs.io/ipfs/Qmd3868V6a9pwjUyuUaqPHg5wnSX8H9pDtLU45coSrmNq2/nft.mp4">
                                <svg className="mr-3" viewBox="0 0 26 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path fillRule="evenodd" clipRule="evenodd" d="M3.396 9.535a.814.814 0 000 .93c.749 1.06 2.03 2.657 3.71 3.98C8.791 15.77 10.788 16.75 13 16.75c2.211 0 4.208-.98 5.893-2.306 1.681-1.322 2.962-2.92 3.71-3.98a.814.814 0 000-.929c-.748-1.06-2.029-2.657-3.71-3.98C17.208 4.23 15.211 3.25 13 3.25c-2.212 0-4.209.98-5.894 2.306-1.68 1.322-2.961 2.92-3.71 3.98zM5.56 3.591C7.5 2.065 10.03.75 13 .75c2.97 0 5.499 1.315 7.439 2.84 1.943 1.53 3.384 3.339 4.209 4.506l.003.005a3.315 3.315 0 010 3.798l-.003.005c-.825 1.167-2.266 2.977-4.209 4.505-1.94 1.526-4.47 2.841-7.44 2.841-2.969 0-5.499-1.315-7.439-2.84-1.942-1.53-3.384-3.339-4.208-4.506l-.004-.005a3.314 3.314 0 010-3.798l.004-.005C2.176 6.929 3.618 5.119 5.56 3.59z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M13 7.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zM7.75 10a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z" fill="currentColor"></path></svg>
                                View on IPFS
                            </ALink>
                        </div>
                        <div className="py-5">
                            <p className="h3">Tags</p>
                            <div className="d-flex flex-wrap-wrap">
                                <ALink className="tag-card" href="/tags/moses%20sumney">
                                    moses sumney
                                </ALink>
                                <ALink className="tag-card" href="/tags/vinyl">
                                    vinyl
                                </ALink>
                                <ALink className="tag-card" href="/tags/lo%20fi">
                                    lo fi
                                </ALink>
                                <ALink className="tag-card" href="/tags/security%20camera">
                                    security camera
                                </ALink>
                                <ALink className="tag-card" href="/tags/irl">
                                    irl
                                </ALink>
                                <ALink className="tag-card" href="/tags/moses">
                                    moses
                                </ALink>
                                <ALink className="tag-card" href="/tags/music">
                                    music
                                </ALink>
                                <ALink className="tag-card" href="/tags/blackalachia">
                                    blackalachia
                                </ALink>
                                <ALink className="tag-card" href="/tags/video">
                                    video
                                </ALink>
                                <ALink className="tag-card" href="/tags/black%20and%20white">
                                    black and white
                                </ALink>
                            </div>
                        </div>
                        <div className="py-5">
                            <div className="d-flex flex-wrap-wrap">
                                <div className="tag-card" style={{ height: '56px', width: '56px' }}>
                                    <svg viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="4">
                                        <path d="M11 4a2 2 0 100-4 2 2 0 000 4zM2 4a2 2 0 100-4 2 2 0 000 4zM20 4a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div className="tag-card tag-lg-card" style={{ height: '56px' }}>
                                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 16V1M17 7l-6-6-6 6M21 21H1" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <p className="mb-0 ml-2">Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2 className="block-title">Provenance</h2>
                    <div className="pt-5">
                        <div className="bid-card">
                            <ALink href="/@litmusearth" className="bid-card-avatar">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/hmayjm73p-000217070009-jpg-5bdui9.jpg?q=45&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" size="small" />
                            </ALink>
                            <div className="bid-card-content">
                                <div>
                                    <div>
                                        <h5 className="mb-0 d-inline mr-2">Bid placed by</h5>
                                        <Tippy tippyRef={litmusearthRef} position="bottom">
                                            <ALink href="/@litmusearth">@litmusearth</ALink>
                                        </Tippy>
                                    </div>
                                    <div>Dec 5, 2021 at 11:17pm</div>
                                </div>
                                <div className="bid-price">1.40 ETH</div>
                            </div>
                            <ALink className="bid-card-link" href="https://etherscan.io/tx/0xcc47252f70315df2c558751aa14ca896b107d0816e3f5fae681c0c3da3464dcf">
                                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M15 0H8v2h4.6L6.3 8.3l1.4 1.4L14 3.4V8h2V1c0-.6-.4-1-1-1z" fill="currentColor"></path><path d="M14 16H1c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h4v2H2v11h11v-3h2v4c0 .6-.4 1-1 1z" fill="currentColor"></path></svg>
                            </ALink>
                        </div>
                        <div className="bid-card">
                            <ALink href="/0x17579F61bb21FD62B91Dd450b4ae47ba3B77af81" className="bid-card-avatar">
                                <BgImage color="linear-gradient(135deg, rgb(82, 63, 239), rgb(253, 34, 173))" bgSize="cover" position="center center" size="small" />
                            </ALink>
                            <div className="bid-card-content">
                                <div>
                                    <div>
                                        <h5 className="mb-0 d-inline mr-2">Bid placed by</h5>
                                        <Tippy tippyRef={x157Ref} position="bottom">
                                            <ALink href="/0x17579F61bb21FD62B91Dd450b4ae47ba3B77af81">0x1757...af81</ALink>
                                        </Tippy>
                                    </div>
                                    <div>Dec 4, 2021 at 11:43pm</div>
                                </div>
                                <div className="bid-price">1.21 ETH</div>
                            </div>
                            <ALink className="bid-card-link" href="https://etherscan.io/tx/0xfa368379a817ac8122062dd120dfb639c53bbe59202f7648f8d2ad6e0c518b5f">
                                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M15 0H8v2h4.6L6.3 8.3l1.4 1.4L14 3.4V8h2V1c0-.6-.4-1-1-1z" fill="currentColor"></path><path d="M14 16H1c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h4v2H2v11h11v-3h2v4c0 .6-.4 1-1 1z" fill="currentColor"></path></svg>
                            </ALink>
                        </div>
                        <div className="bid-card">
                            <ALink href="/@litmusearth" className="bid-card-avatar">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/hmayjm73p-000217070009-jpg-5bdui9.jpg?q=45&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" size="small" />
                            </ALink>
                            <div className="bid-card-content">
                                <div>
                                    <div>
                                        <h5 className="mb-0 d-inline mr-2">Bid placed by</h5>
                                        <Tippy tippyRef={litmusearthRef} position="bottom">
                                            <ALink href="/@litmusearth">@litmusearth</ALink>
                                        </Tippy>
                                    </div>
                                    <div>Dec 4, 2021 at 11:20pm</div>
                                </div>
                                <div className="bid-price">1.00 ETH</div>
                            </div>
                            <ALink className="bid-card-link" href="https://etherscan.io/tx/0x98559b6afe0a75e276b2428195844f0a0c630516a17193ef3f2411cd819e96a8">
                                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M15 0H8v2h4.6L6.3 8.3l1.4 1.4L14 3.4V8h2V1c0-.6-.4-1-1-1z" fill="currentColor"></path><path d="M14 16H1c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h4v2H2v11h11v-3h2v4c0 .6-.4 1-1 1z" fill="currentColor"></path></svg>
                            </ALink>
                        </div>
                        <div className="bid-card">
                            <ALink href="/@moses" className="bid-card-avatar">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/a5yzrxx9i-moses-2214-1-jpg-4jmr8l.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" size="small" />
                            </ALink>
                            <div className="bid-card-content">
                                <div>
                                    <div>
                                        <h5 className="mb-0 d-inline mr-2">Bid placed by</h5>
                                        <Tippy tippyRef={mosesRef} position="bottom">
                                            <ALink href="/@moses">@moses</ALink>
                                        </Tippy>
                                    </div>
                                    <div>Dec 4, 2021 at 11:00pm</div>
                                </div>
                                <div className="bid-price">1.00 ETH</div>
                            </div>
                            <ALink className="bid-card-link" href="https://etherscan.io/tx/0x864ba9db24337eb11271e158f2bc50eb9fd00ceffa56b59ecc7592b48b57eb29">
                                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M15 0H8v2h4.6L6.3 8.3l1.4 1.4L14 3.4V8h2V1c0-.6-.4-1-1-1z" fill="currentColor"></path><path d="M14 16H1c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h4v2H2v11h11v-3h2v4c0 .6-.4 1-1 1z" fill="currentColor"></path></svg>
                            </ALink>
                        </div>
                        <div className="bid-card">
                            <ALink href="/@moses" className="bid-card-avatar">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/a5yzrxx9i-moses-2214-1-jpg-4jmr8l.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" size="small" />
                            </ALink>
                            <div className="bid-card-content">
                                <div>
                                    <div>
                                        <h5 className="mb-0 d-inline mr-2">Minted by</h5>
                                        <Tippy tippyRef={mosesRef} position="bottom">
                                            <ALink href="/@moses">@moses</ALink>
                                        </Tippy>
                                    </div>
                                    <div>Dec 4, 2021 at 11:20pm</div>
                                </div>
                                <div className="bid-price"></div>
                            </div>
                            <ALink className="bid-card-link" href="https://etherscan.io/tx/0x38c9dee9faacc1eece3cdf7fa99dd4ccc27a25ccf181f0e8f1a9513b433261ca">
                                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M15 0H8v2h4.6L6.3 8.3l1.4 1.4L14 3.4V8h2V1c0-.6-.4-1-1-1z" fill="currentColor"></path><path d="M14 16H1c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h4v2H2v11h11v-3h2v4c0 .6-.4 1-1 1z" fill="currentColor"></path></svg>
                            </ALink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-6">
                <div className="col-md-12">
                    <h2 className="block-title">Creator</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <ALink href="/@moses" className="d-flex">
                                <BgImage url="https://f8n-production.imgix.net/creators/profile/a5yzrxx9i-moses-2214-1-jpg-4jmr8l.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2" bgSize="cover" position="center center" size="large" />
                                <div className="">
                                    <h2 className="">Moses Sumney</h2>
                                    <h4 className="gradient-title">@moses</h4>
                                </div>
                            </ALink>
                        </div>
                        <div className="col-md-6">
                            <h4>Interdisciplinary.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}