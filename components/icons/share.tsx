import React from 'react';

interface ShareIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    id?: number
}

const ShareIcon: React.FC<ShareIconProps> = ({
    children,
    className,
    fill,
    height,
    width,
    id,
    ...props
  }) => {
    return (
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 24" height={height} width={width} className={className} {...props}>
            <path d="M11 16V1M17 7l-6-6-6 6M21 21H1" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
        </svg>
    )
}

export default ShareIcon;