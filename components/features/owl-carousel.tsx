import React, { useRef, useEffect } from 'react';
import Carousel from 'react-owl-carousel2';

interface CarouselProps {
    children?: any,
    adClass?: string;
    options?: object;
    isTheme?: boolean,
    onChangeRef?: any
}

const OwlCarousel: React.FC<CarouselProps> = (props) => {
    const { adClass, options, isTheme = true } = props;
    const carouselRef = useRef( null );
    const defaultOptions = {
        loop: false,
        margin: 0,
        nav: false,
        navText: ['<svg viewBox="0 0 16 16" fill="none" width="16" height="16" " style="transform: rotate(90deg);"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 11.4143L12.7071 6.7072C13.0976 6.31668 13.0976 5.68351 12.7071 5.29299C12.3166 4.90246 11.6834 4.90246 11.2929 5.29299L8 8.58588L4.70711 5.29299C4.31658 4.90246 3.68342 4.90246 3.29289 5.29299C2.90237 5.68351 2.90237 6.31668 3.29289 6.7072L8 11.4143Z" fill="currentColor"></path></svg>', '<svg viewBox="0 0 16 16" fill="none" width="16" height="16" " style="transform: rotate(-90deg);"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 11.4143L12.7071 6.7072C13.0976 6.31668 13.0976 5.68351 12.7071 5.29299C12.3166 4.90246 11.6834 4.90246 11.2929 5.29299L8 8.58588L4.70711 5.29299C4.31658 4.90246 3.68342 4.90246 3.29289 5.29299C2.90237 5.68351 2.90237 6.31668 3.29289 6.7072L8 11.4143Z" fill="currentColor"></path></svg>'],
        dots: false,
        autoplay: false,
        autoplayTimeout: 15000,
        items: 1
    };

    useEffect( () => {
        if ( props.onChangeRef ) {
            props.onChangeRef( carouselRef );
        }
    }, [ carouselRef ] );

    let settings = Object.assign( {}, defaultOptions, options );

    return (
        <React.Fragment>
            {
                props.children !== undefined ?
                    props.children.length > 0 || ( props.children && props.children.length === undefined ) ?
                        <Carousel ref={ carouselRef } className={ `owl-carousel ${ isTheme ? 'owl-theme' : '' } ${ adClass }` } options={ settings }>
                            { props.children }
                        </Carousel >
                        : ""
                    : ""
            }
        </React.Fragment>
    );
};

function areEqual ( prev, next ) {
    if ( next.redraw === false ) {
        return true;
    }
    return prev === next;
}

export default React.memo( OwlCarousel, areEqual );