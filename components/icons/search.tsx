import React from 'react';

interface SearchIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    primaryColor?: string;
    secondaryColor?: string;
    id?: number
}

const SearchIcon: React.FC<SearchIconProps> = ({
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
            <path fillRule="evenodd" clipRule="evenodd" d="M2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7ZM7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C8.57591 14 10.0302 13.4792 11.2001 12.6004C11.2281 12.6376 11.259 12.6733 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L12.7071 11.2929C12.6733 11.259 12.6376 11.2281 12.6004 11.2001C13.4792 10.0302 14 8.57591 14 7C14 3.13401 10.866 0 7 0Z" fill="currentColor"></path>
        </svg>
    )
}

export default SearchIcon;