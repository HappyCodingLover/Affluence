import React from 'react';

interface ListingIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    primaryColor?: string;
    secondaryColor?: string;
    id?: number
}

const ListingIcon: React.FC<ListingIconProps> = ({
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
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height={height} width={width} className={className} {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M2 3V7.58579C2 7.851 2.10536 8.10536 2.29289 8.29289L7.29289 13.2929C7.68342 13.6834 8.31658 13.6834 8.70711 13.2929L13.2929 8.70711C13.6834 8.31658 13.6834 7.68342 13.2929 7.29289L8.29289 2.29289C8.10536 2.10536 7.851 2 7.58579 2H3C2.44772 2 2 2.44772 2 3ZM4.75 5.5C5.16421 5.5 5.5 5.16421 5.5 4.75C5.5 4.33579 5.16421 4 4.75 4C4.33579 4 4 4.33579 4 4.75C4 5.16421 4.33579 5.5 4.75 5.5Z" fill="currentColor"></path>
        </svg>
    )
}

export default ListingIcon;