import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

interface ALinkProps {
    className?: string;
    style?: object;
    href?: any;
    id?: number
}
const ALink: React.FC<ALinkProps> = ({
    children,
    className,
    style,
    href,
    id,
    ...props
  }) => {
    if ( typeof href === 'object' ) {
        if ( !href.pathname ) {
            href.pathname = useRouter().pathname;
        }

        if ( href.query && href.query.grid ) {
            href.pathname.replace( '[grid]', href.query.grid );
        }
    }

    return (
        <>
            { href !== '#' ?
                <Link href={ href } { ...props }>
                    <a className={ className } style={ style }>
                        { children }
                    </a>
                </Link>
                : <a className={ className } href="#" onClick={ e => e.preventDefault() }>{ children }</a>
            }
        </>
    )
}

export default ALink;