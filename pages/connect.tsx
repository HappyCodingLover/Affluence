import { useState, useEffect } from "react";

// Import Custom Component
import RaribleIcon from "../components/icons/rarible";
import TorusIcon from "../components/icons/torus";
import BloctoIcon from "../components/icons/blocto";
import ShieldIcon from "../components/icons/shield";
import CowIcon from "../components/icons/cow";
import WaveRoundIcon from "../components/icons/wave-round";

import ALink from '../components/common/ALink';

function Connect () {
    const [ btnValue, setBtnValue ] = useState( 0 );

    function changeFadeIcon() {
        setBtnValue( (btnValue + 1) % 4 );
    }

    useEffect(()=> {
        setTimeout(function() {
            changeFadeIcon();
        }, 2000);
    }, [ btnValue ]);

    return (
        <>
            <main className="main connect">
                <div className="sidebar" style={{ backgroundImage: `url('images/common/Sidebar.png')` }} >
                    <ALink href="/" >
                        <RaribleIcon width="40" height="40" />
                    </ALink>
                </div>
                <div className="content-wrapper">
                    <h1>Sign in with your wallet</h1>
                    <h4 className="mb-2">Sign in with one of available wallet providers or create a new wallet. <ALink href="/" className="text-blue" >What is a wallet?</ALink></h4>
                    
                    <div className="content-btns">
                        <button type="button" className="btn-default btn-blue btn-rounded">
                            <TorusIcon width="22" height="23" className="mr-2" /> <span>Torus</span>
                        </button>
                        <button type="button" className="btn-default btn-white btn-rounded">
                            <BloctoIcon width="32" height="32" className="mr-2" /> <span>Blocto</span>
                        </button>
                        <button type="button" className="btn-default btn-white btn-rounded">
                            {
                                btnValue == 0 && (
                                    <img src="/images/icons/Rainbow.png" className="d-inline mr-2" width="22" height="22" />
                                )
                            }
                            {
                                btnValue == 1 && (
                                    <ShieldIcon width="22" height="24" className="mr-2" />
                                )
                            }
                            {
                                btnValue == 2 && (
                                    <CowIcon width="26" height="24" className="mr-2" />
                                )
                            }
                            {
                                btnValue == 3 && (
                                    <WaveRoundIcon width="28" height="17" className="mr-2" />
                                )
                            }
                            <span>Mobile Wallet</span>
                        </button>
                        <button type="button" className="btn-default btn-white btn-rounded">
                            <span>Show more options</span>
                        </button>
                    </div>
                    <h5>We do not own your private keys and cannot access your funds without your confirmation.</h5>
                </div>
            </main>
        </>
    )
}

export default Connect;