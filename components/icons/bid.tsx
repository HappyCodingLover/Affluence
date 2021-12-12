import React from 'react';

interface BidIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    primaryColor?: string;
    secondaryColor?: string;
    id?: number
}

const BidIcon: React.FC<BidIconProps> = ({
    children,
    className,
    fill,
    height,
    width,
    primaryColor,
    secondaryColor,
    id,
    ...props
  }) => {
    return (
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" height={height} width={width} className={className} {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.8114 5.35926L6.67506 1L12.3278 4.20088L9.48709 6.75504L16.1058 10.5126L15.5164 11.5645L8.89767 7.80289L8.16089 11.5523L2.5 8.3432L5.8114 5.35926ZM2.53637 12.7925H9.17144V14H2.53637V12.7925Z" fill="currentColor"></path>
        </svg>
    )
}

export default BidIcon;