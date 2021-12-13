import React from 'react';

interface CowIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    primaryColor?: string;
    id?: number
}

const CowIcon: React.FC<CowIconProps> = ({
    children,
    className,
    fill,
    height,
    width,
    primaryColor,
    id,
    ...props
  }) => {
    return (
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24" height={height} width={width} className={className} {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.75926 0.5C9.60494 2.73611 8.74074 7.975 6.51852 11.0417C4.2963 14.1083 1.58025 16.7917 0.5 17.75L4.66667 23.5C6.3642 22.2222 10.4074 18.5167 13 13.9167C15.5926 18.5167 19.6358 22.2222 21.3333 23.5L25.5 17.75C24.4198 16.7917 21.7037 14.1083 19.4815 11.0417C17.2593 7.975 16.3951 2.73611 16.2407 0.5H13H9.75926Z" fill={primaryColor ? primaryColor : '#EF8D65'}/>
        </svg>
    )
}

export default CowIcon;