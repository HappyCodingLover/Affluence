import React from 'react';

interface LinkIconProps {
    className?: string;
    style?: object;
    viewBox?: string,
    fill?: string;
    height?: string;
    width?: string;
    id?: number
}

const LinkIcon: React.FC<LinkIconProps> = ({
    children,
    className,
    viewBox,
    fill,
    height,
    width,
    id,
    ...props
  }) => {
    return (
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} height={height} width={width} className={className} {...props}>
            <path d="M10 5l2.575-2.575a5.011 5.011 0 017 0v0a5.011 5.011 0 010 7L17 12M12 17l-2.575 2.575a5.011 5.011 0 01-7 0v0a5.011 5.011 0 010-7L5 10M7 15l8-8" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" fill="none"></path>
        </svg>
    )
}

export default LinkIcon;