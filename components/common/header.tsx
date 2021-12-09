// Import Custom Component
import { useEffect, useState } from "react";

import ALink from "./ALink";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";

export default function Header ( { changeToDarkMode } ) {
    const [mode, setMode]= useState( false );

    useEffect(()=>{
        changeToDarkMode && changeToDarkMode(mode);
    }, [mode])

    function openMobileMenu ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
    }

    function modeHandler ( ) {
        if(mode == false) {
            setMode( true );
        } else {
            setMode( false );
        }
    }

    return (
        <header className="header">
             <div className="header-middle sticky-header">
                <div className="container-fluid">
                    <div className="header-left">
                        <button className="mobile-menu-toggler mr-2 d-xl-none d-block" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo d-flex align-items-center text-dark">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#FEDA03"></rect><path d="M27.6007 19.8536C28.8607 19.5262 29.9817 18.5838 29.9817 16.6889C29.9817 13.5342 27.3031 12.8 23.8706 12.8H10.2V27.0064H15.9539V22.185H22.7793C23.8309 22.185 24.446 22.6016 24.446 23.6334V27.0064H30.2V23.4548C30.2 21.5203 29.1087 20.3 27.6007 19.8536ZM22.8785 18.3556H15.9539V16.9667H22.8785C23.6325 16.9667 24.0888 17.0659 24.0888 17.6612C24.0888 18.2564 23.6325 18.3556 22.8785 18.3556Z" fill="black"></path></svg>
                            <span className="ml-3 d-sm-block d-none">Rarible</span>
                        </ALink>
                    </div>

                    <div className="header-center">
                        <SearchForm />

                        <MainMenu />
                    </div>

                    <div className="header-right pr-0">
                        <button type="button" className="btn-create btn-gradient btn-rounded text-white mr-3">Create</button>

                        <button type="button" className="btn-default btn-login btn-border-light btn-rounded text-dark mr-3 bg-transparent">Sign in</button>

                        <button type="button" className="btn-theme-color-switch btn-border-light rounded-circle" onClick={ modeHandler }>
                            {
                                mode ?
                                <svg viewBox="0 0 24 24" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN mKksV"><path fillRule="evenodd" clipRule="evenodd" d="M11.25 4.75C11.25 4.33579 11.5858 4 12 4C12.4142 4 12.75 4.33579 12.75 4.75V6.25C12.75 6.66421 12.4142 7 12 7C11.5858 7 11.25 6.66421 11.25 6.25V4.75ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM12 17C11.5858 17 11.25 17.3358 11.25 17.75V19.25C11.25 19.6642 11.5858 20 12 20C12.4142 20 12.75 19.6642 12.75 19.25V17.75C12.75 17.3358 12.4142 17 12 17ZM19.25 11.25C19.6642 11.25 20 11.5858 20 12C20 12.4142 19.6642 12.75 19.25 12.75H17.75C17.3358 12.75 17 12.4142 17 12C17 11.5858 17.3358 11.25 17.75 11.25H19.25ZM7 12C7 11.5858 6.66421 11.25 6.25 11.25H4.75C4.33579 11.25 4 11.5858 4 12C4 12.4142 4.33579 12.75 4.75 12.75H6.25C6.66421 12.75 7 12.4142 7 12ZM16.5962 6.34314C16.8891 6.05024 17.364 6.05024 17.6569 6.34314C17.9497 6.63603 17.9497 7.1109 17.6569 7.4038L16.5962 8.46446C16.3033 8.75735 15.8284 8.75735 15.5355 8.46446C15.2426 8.17156 15.2426 7.69669 15.5355 7.4038L16.5962 6.34314ZM8.46447 15.5355C8.17158 15.2426 7.69671 15.2426 7.40381 15.5355L6.34315 16.5962C6.05026 16.8891 6.05026 17.3639 6.34315 17.6568C6.63605 17.9497 7.11092 17.9497 7.40381 17.6568L8.46447 16.5962C8.75737 16.3033 8.75737 15.8284 8.46447 15.5355ZM17.6569 16.5962C17.9498 16.8891 17.9498 17.364 17.6569 17.6569C17.364 17.9497 16.8891 17.9497 16.5962 17.6569L15.5355 16.5962C15.2427 16.3033 15.2427 15.8284 15.5355 15.5355C15.8284 15.2426 16.3033 15.2426 16.5962 15.5355L17.6569 16.5962ZM8.46448 8.46447C8.75738 8.17158 8.75738 7.69671 8.46448 7.40381L7.40382 6.34315C7.11093 6.05026 6.63605 6.05026 6.34316 6.34315C6.05027 6.63605 6.05027 7.11092 6.34316 7.40381L7.40382 8.46447C7.69671 8.75737 8.17159 8.75737 8.46448 8.46447Z" fill="currentColor"></path></svg>
                                :
                                <svg viewBox="0 0 24 24" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN mKksV"><path fillRule="evenodd" clipRule="evenodd" d="M5.75788 17.4844C5.07158 16.7559 6.12135 15.7797 7.1112 15.928C7.42793 15.9754 7.75214 16 8.08209 16C11.6719 16 14.5821 13.0899 14.5821 9.5C14.5821 8.42871 14.3302 7.41794 13.8791 6.52697C13.4263 5.63282 14.0229 4.31312 14.9328 4.73338C17.6775 6.00109 19.5821 8.77812 19.5821 12C19.5821 16.4183 16.0004 20 11.5821 20C9.28652 20 7.21678 19.0331 5.75788 17.4844Z" fill="currentColor"></path></svg>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </header >
    )
}