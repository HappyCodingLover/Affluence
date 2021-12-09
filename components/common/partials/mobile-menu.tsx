import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SlideToggle from 'react-slide-toggle';

// Import Custom Component
import ALink from "../ALink";
import { mainMenu } from "../../../utils/data/menu";

function MobileMenu ( { router } ) {
    const pathname = router.pathname;
    const [ searchText, setSearchText ] = useState( '' );

    useEffect( () => {
        router.events.on( 'routeChangeStart', closeMobileMenu );

        return () => {
            router.events.off( 'routeChangeStart', closeMobileMenu );
        }
    }, [] );

    function isOtherPage () {
        return mainMenu.other.find( variation => variation.url === pathname );
    }

    function closeMobileMenu () {
        document.querySelector( "body" ).classList.remove( "mmenu-active" );

        if ( document.querySelector( ".menu-toggler" ) ) {
            document.querySelector( ".menu-toggler" ).classList.remove( "active" );
        }
    }

    function searchProducts ( e ) {
        e.preventDefault();
        router.push( {
            pathname: '/shop',
            query: {
                search: searchText
            }
        } );
    }

    function onChangeSearchText ( e ) {
        setSearchText( e.target.value );
    }

    return (
        <>
            <div className="mobile-menu-overlay" onClick={ closeMobileMenu }></div>
            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close" onClick={ closeMobileMenu }><i className="fa fa-times"></i></span>
                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            <li className="active">
                                <ALink href="#">Explore</ALink>
                            </li>
                            <li>
                                <ALink href="#">My Profile</ALink>
                            </li>
                            <li>
                                <ALink href="#">Following</ALink>
                            </li>
                            <li>
                                <ALink href="#">Activity</ALink>
                            </li>
                            <span className="seperator"></span>
                            <li>
                                <ALink href="/pages/about-us">How it works</ALink>
                            </li>

                            <li>
                                <SlideToggle collapsed={ true }>
                                    { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                        <>
                                            <a href="#" className={ `${ toggleState.toLowerCase() }` } onClick={ e => { e.preventDefault(); onToggle(); } }>Community<span className="mmenu-btn"><svg viewBox="0 0 16 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kRuSvk"><path fillRule="evenodd" clipRule="evenodd" d="M8 11.4143L12.7071 6.7072C13.0976 6.31668 13.0976 5.68351 12.7071 5.29299C12.3166 4.90246 11.6834 4.90246 11.2929 5.29299L8 8.58588L4.70711 5.29299C4.31658 4.90246 3.68342 4.90246 3.29289 5.29299C2.90237 5.68351 2.90237 6.31668 3.29289 6.7072L8 11.4143Z" fill="currentColor"></path></svg></span></a>
                                            <ul ref={ setCollapsibleElement }>
                                                <li><ALink href="#">RARI Token</ALink></li>
                                                <li><ALink href="#">Discussion</ALink></li>
                                                <li><ALink href="#">Voting</ALink></li>
                                                <li><ALink href="#">Suggest feature</ALink></li>
                                                <li><ALink href="#">Rarible protocal</ALink></li>
                                                <li><ALink href="#">Subscribe</ALink></li>
                                            </ul>
                                        </>
                                    ) }
                                </SlideToggle>
                            </li>
                        </ul>
                    </nav>

                    <form className="search-wrapper mb-2" action="#" onSubmit={ searchProducts }>
                        <input type="text" className="form-control mb-0" placeholder="Search..." required onChange={ onChangeSearchText } />
                        <button className="btn icon-search text-white bg-transparent p-0" type="submit"></button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default withRouter( MobileMenu );