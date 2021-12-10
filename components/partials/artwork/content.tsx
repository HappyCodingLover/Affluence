import React, { useEffect } from 'react';

// Import Custom Component
import ALink from '../../common/ALink';
import BgImage from '../../common/BgImage';

// Import Components
import Information from './information';
import Description from './description';
import Details from './details';
import Tags from './tags';
import Actions from './actions';
import Provenance from './provenance';
import Creator from './creator';

// You can now get a ref directly to the DOM button:
export default function Content() {
    const artworkContent = {
        'info': {
            'title': 'Assembly #1',
            'description': 'Minted on Dec 1, 2021',
            'link': 'https://etherscan.io/tx/0x38c9dee9faacc1eece3cdf7fa99dd4ccc27a25ccf181f0e8f1a9513b433261ca',
            'created_by': {
                'avatar': 'https://f8n-production.imgix.net/creators/profile/a5yzrxx9i-moses-2214-1-jpg-4jmr8l.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2',
                'name': 'Moses Sumney',
                'slug': 'moses',
                'sub_title': 'Interdisciplinary.',
                'followings': [
                    {
                        'slug': 'charliedamgood',
                        'avatar': 'https://f8n-production.imgix.net/creators/profile/ej0oce2xa-390022-1918221999775-345692629-n-jpg-j9r5xu.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                    },
                    {
                        'slug': 'earthtosam',
                        'avatar': 'https://f8n-production.imgix.net/creators/profile/z5lfuthbo-iqdz1oon-400x400-jpeg-wt0tgr.jpeg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                    },
                    {
                        'slug': 'besaraba',
                        'avatar': 'https://f8n-production.imgix.net/creators/profile/40c6cb7et-giphy-2-gif-kaffkt.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                    },
                    {
                        'slug': 'patrou',
                        'avatar': 'https://f8n-production.imgix.net/creators/profile/vppohfpqt-mg-8772-passportsquares-jpg-8xdow1.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                    },
                    {
                        'slug': 'Kinlaw',
                        'avatar': 'https://f8n-production.imgix.net/creators/profile/euyu4c2fj-2020-09-07-kinlaw-1278-1-easy-resize-com-jpg-aht4lu.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                    },
                ],
                'following': 4,
                'followers': 360,
            },
            'sold_eth': 1.40,
            'sold_usd': '6,093.46',
            'owned_by': {
                'avatar': 'https://f8n-production.imgix.net/creators/profile/hmayjm73p-000217070009-jpg-5bdui9.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2',
                'name': 'jacob frazer',
                'slug': 'litmusearth',
                'sub_title': 'California-based director/photographer & collector',
                'followings': [
                    {
                        'slug': 'GoldCubeNFT',
                        'avatar': 'https://f8n-production.imgix.net/creators/profile/9piypivrl-box-gif-bm9bip.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                    },
                    {
                        'slug': 'GLADIARTER',
                        'avatar': 'https://f8n-production.imgix.net/creators/profile/hxlpxty05-l9lams0r-400x400-jpg-f5q42u.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                    },
                    {
                        'slug': 'bg',
                        'avatar': 'https://f8n-production.imgix.net/creators/profile/xf24shkyy-bglogo-gif-sbt73s.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                    },
                    {
                        'slug': 'elraart',
                        'avatar': 'https://f8n-production.imgix.net/creators/profile/0nfc7y2k8-edom-png-0madpu.png?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                    },
                    {
                        'slug': 'noombuddhanuwat',
                        'avatar': 'https://f8n-production.imgix.net/creators/profile/wm3ivumg8-img-5019-jpg-u3przm.JPG?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                    },
                ],
                    'following': 46,
                    'followers': 264,
            },
        },
        'desc': {
            'paragraphs': [
                'In "Assembly #1," I enter a vinyl manufacturing plant and self-press a special edition of my new album "Live From Blackalachia." At the end of the voyeuristic film, I hold the finished record up along with its edition number: #1.',
                'Purchase of this NFT will include this video and the signed vinyl record I pressed in the film, shipped to the winner of the auction.',
                'Assembled at Citizen Vinyl in Asheville North Carolina on November 23rd, 2021, the disc features a unique splatter pattern and a scannable-by-phone Vinylkey chip that links to proof of ownership.',
                'Find images of the vinyl here:<br/>www.mosessumney.com/assembly',
            ],
            'footer_paragraph': 'vinylkey #10100443354A2F7080'
        },
        'details': {
            'etherscan': 'https://etherscan.io/token/0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405?a=113025',
            'metadata': 'https://ipfs.io/ipfs/QmUER7X4AK5E9d2K4QvBTALRMfdtcExURdmqfrrQbqoDeh/metadata.json',
            'ipfs': 'https://ipfs.io/ipfs/Qmd3868V6a9pwjUyuUaqPHg5wnSX8H9pDtLU45coSrmNq2/nft.mp4',
        },
        'tags': [
            'moses sumney',
            'vinyl',
            'lo fi',
            'security camera',
            'irl',
            'moses',
            'music',
            'blackalachia',
            'video',
            'black and white',
        ],
        'actions': {

        },
        'provenances': [
            {
                'type': 'auction',
                'user': {
                    'avatar': 'https://f8n-production.imgix.net/creators/profile/hmayjm73p-000217070009-jpg-5bdui9.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2',
                    'name': 'jacob frazer',
                    'slug': 'litmusearth',
                    'sub_title': 'California-based director/photographer & collector',
                    'followings': [
                        {
                            'slug': 'GoldCubeNFT',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/9piypivrl-box-gif-bm9bip.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'GLADIARTER',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/hxlpxty05-l9lams0r-400x400-jpg-f5q42u.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'bg',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/xf24shkyy-bglogo-gif-sbt73s.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'elraart',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/0nfc7y2k8-edom-png-0madpu.png?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'noombuddhanuwat',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/wm3ivumg8-img-5019-jpg-u3przm.JPG?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        }
                    ],
                    'following': 46,
                    'followers': 264,
                },
                'date': 'Dec 5, 2021 at 11:52pm',
                'etherscan': 'https://etherscan.io/tx/0xe4c5f4fe3c2abad26c96c9802f743ff7fbb956d7afbc65baa26b5ced05f4e598'
            },
            {
                'type': 'auction_won',
                'user': {
                    'avatar': 'https://f8n-production.imgix.net/creators/profile/hmayjm73p-000217070009-jpg-5bdui9.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2',
                    'name': 'jacob frazer',
                    'slug': 'litmusearth',
                    'sub_title': 'California-based director/photographer & collector',
                    'followings': [
                        {
                            'slug': 'GoldCubeNFT',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/9piypivrl-box-gif-bm9bip.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'GLADIARTER',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/hxlpxty05-l9lams0r-400x400-jpg-f5q42u.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'bg',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/xf24shkyy-bglogo-gif-sbt73s.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'elraart',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/0nfc7y2k8-edom-png-0madpu.png?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'noombuddhanuwat',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/wm3ivumg8-img-5019-jpg-u3przm.JPG?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        }
                    ],
                    'following': 46,
                    'followers': 264,
                },
                'sold_eth': '1.40',
                'sold_usd': '6,093.46',
                'date': 'Dec 5, 2021 at 11:32pm'
            },
            {
                'type': 'bid',
                'user': {
                    'avatar': 'https://f8n-production.imgix.net/creators/profile/hmayjm73p-000217070009-jpg-5bdui9.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2',
                    'name': 'jacob frazer',
                    'slug': 'litmusearth',
                    'sub_title': 'California-based director/photographer & collector',
                    'followings': [
                        {
                            'slug': 'GoldCubeNFT',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/9piypivrl-box-gif-bm9bip.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'GLADIARTER',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/hxlpxty05-l9lams0r-400x400-jpg-f5q42u.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'bg',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/xf24shkyy-bglogo-gif-sbt73s.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'elraart',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/0nfc7y2k8-edom-png-0madpu.png?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'noombuddhanuwat',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/wm3ivumg8-img-5019-jpg-u3przm.JPG?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        }
                    ],
                    'following': 46,
                    'followers': 264,
                },
                'sold_eth': '1.40',
                'date': 'Dec 4, 2021 at 11:43pm',
                'etherscan': 'https://etherscan.io/tx/0xcc47252f70315df2c558751aa14ca896b107d0816e3f5fae681c0c3da3464dcf'
            },
            {
                'type': 'bid',
                'user': {
                    'color': 'linear-gradient(135deg, rgb(82, 63, 239), rgb(253, 34, 173))',
                    'name': '0x1757...af81',
                    'slug': '0x1757...af81',
                    'sub_title': '',
                    'followings': [
                        {
                            'slug': 'kubraboy',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/qtrj5to6m-nft-jfif-j9hbai.jfif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'officialivelina',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/g79cjingd-10-png-12bmmt.png?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'CRYPTO-CARS',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/vjyta7moe-logo-png-y99lum.png?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'GoldCubeNFT',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/9piypivrl-box-gif-bm9bip.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'Hakinar',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/tsvp8tdeb-bipol-gif-7uhd0k.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        }
                    ],
                    'following': 1,
                    'followers': 53,
                },
                'sold_eth': '1.21',
                'date': 'Dec 4, 2021 at 11:20pm',
                'etherscan': 'https://etherscan.io/tx/0xcc47252f70315df2c558751aa14ca896b107d0816e3f5fae681c0c3da3464dcf'
            },
            {
                'type': 'bid',
                'user': {
                    'avatar': 'https://f8n-production.imgix.net/creators/profile/hmayjm73p-000217070009-jpg-5bdui9.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2',
                    'name': 'jacob frazer',
                    'slug': 'litmusearth',
                    'sub_title': 'California-based director/photographer & collector',
                    'followings': [
                        {
                            'slug': 'GoldCubeNFT',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/9piypivrl-box-gif-bm9bip.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'GLADIARTER',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/hxlpxty05-l9lams0r-400x400-jpg-f5q42u.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'bg',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/xf24shkyy-bglogo-gif-sbt73s.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'elraart',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/0nfc7y2k8-edom-png-0madpu.png?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'noombuddhanuwat',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/wm3ivumg8-img-5019-jpg-u3przm.JPG?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        }
                    ],
                    'following': 46,
                    'followers': 264,
                },
                'sold_eth': '1.00',
                'date': 'Dec 4, 2021 at 11:20pm',
                'etherscan': 'https://etherscan.io/tx/0x98559b6afe0a75e276b2428195844f0a0c630516a17193ef3f2411cd819e96a8'
            },
            {
                'type': 'list',
                'user': {
                    'avatar': 'https://f8n-production.imgix.net/creators/profile/a5yzrxx9i-moses-2214-1-jpg-4jmr8l.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2',
                    'name': 'Moses Sumney',
                    'slug': 'moses',
                    'sub_title': 'Interdisciplinary.',
                    'followings': [
                        {
                            'slug': 'charliedamgood',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/ej0oce2xa-390022-1918221999775-345692629-n-jpg-j9r5xu.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'earthtosam',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/z5lfuthbo-iqdz1oon-400x400-jpeg-wt0tgr.jpeg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'besaraba',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/40c6cb7et-giphy-2-gif-kaffkt.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'patrou',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/vppohfpqt-mg-8772-passportsquares-jpg-8xdow1.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'Kinlaw',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/euyu4c2fj-2020-09-07-kinlaw-1278-1-easy-resize-com-jpg-aht4lu.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                    ],
                    'following': 4,
                    'followers': 360,
                },
                'sold_eth': '1.00',
                'date': 'Dec 4, 2021 at 11:00pm',
                'etherscan': 'https://etherscan.io/tx/0x864ba9db24337eb11271e158f2bc50eb9fd00ceffa56b59ecc7592b48b57eb29'
            },
            {
                'type': 'mint',
                'user': {
                    'avatar': 'https://f8n-production.imgix.net/creators/profile/a5yzrxx9i-moses-2214-1-jpg-4jmr8l.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2',
                    'name': 'Moses Sumney',
                    'slug': 'moses',
                    'sub_title': 'Interdisciplinary.',
                    'followings': [
                        {
                            'slug': 'charliedamgood',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/ej0oce2xa-390022-1918221999775-345692629-n-jpg-j9r5xu.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'earthtosam',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/z5lfuthbo-iqdz1oon-400x400-jpeg-wt0tgr.jpeg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'besaraba',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/40c6cb7et-giphy-2-gif-kaffkt.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'patrou',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/vppohfpqt-mg-8772-passportsquares-jpg-8xdow1.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                        {
                            'slug': 'Kinlaw',
                            'avatar': 'https://f8n-production.imgix.net/creators/profile/euyu4c2fj-2020-09-07-kinlaw-1278-1-easy-resize-com-jpg-aht4lu.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                        },
                    ],
                    'following': 4,
                    'followers': 360,
                },
                'date': 'Dec 1, 2021 at 10:53am',
                'etherscan': 'https://etherscan.io/tx/0x38c9dee9faacc1eece3cdf7fa99dd4ccc27a25ccf181f0e8f1a9513b433261ca'
            }
        ],
        'creator': {
            'avatar': 'https://f8n-production.imgix.net/creators/profile/a5yzrxx9i-moses-2214-1-jpg-4jmr8l.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2',
            'name': 'Moses Sumney',
            'slug': 'moses',
            'sub_title': 'Interdisciplinary.',
            'followings': [
                {
                    'slug': 'charliedamgood',
                    'avatar': 'https://f8n-production.imgix.net/creators/profile/ej0oce2xa-390022-1918221999775-345692629-n-jpg-j9r5xu.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                },
                {
                    'slug': 'earthtosam',
                    'avatar': 'https://f8n-production.imgix.net/creators/profile/z5lfuthbo-iqdz1oon-400x400-jpeg-wt0tgr.jpeg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                },
                {
                    'slug': 'besaraba',
                    'avatar': 'https://f8n-production.imgix.net/creators/profile/40c6cb7et-giphy-2-gif-kaffkt.gif?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                },
                {
                    'slug': 'patrou',
                    'avatar': 'https://f8n-production.imgix.net/creators/profile/vppohfpqt-mg-8772-passportsquares-jpg-8xdow1.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                },
                {
                    'slug': 'Kinlaw',
                    'avatar': 'https://f8n-production.imgix.net/creators/profile/euyu4c2fj-2020-09-07-kinlaw-1278-1-easy-resize-com-jpg-aht4lu.jpg?q=45&w=32&h=32&auto=format%2Ccompress&fit=crop&dpr=2',
                },
            ],
            'following': 4,
            'followers': 360,
        }
    }

    return (
        <section className="assembly-section mt-5 mb-3">
            <Information info={artworkContent.info} />
            <div className="row">
                <div className="col-md-6">
                    <Description desc={artworkContent.desc} className="" />
                    <Details details={artworkContent.details} className="pt-5"/>
                    <Tags tags={artworkContent.tags} className="pt-5"/>
                    <Actions actions={artworkContent.actions} className="pt-5" />
                </div>
                <div className="col-md-6">
                    <Provenance provenances={artworkContent.provenances} className="" />
                </div>
            </div>
            <div className="row pt-6">
                <div className="col-md-12">
                    <Creator creator={artworkContent.creator} className="" />
                </div>
            </div>
        </section>
    );
}