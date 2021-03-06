import React from 'react';

interface CollectionsIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    id?: number
}

const CollectionsIcon: React.FC<CollectionsIconProps> = ({
    children,
    className,
    fill,
    height,
    width,
    id,
    ...props
  }) => {
    return (
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" height={height} width={width} className={className} {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.3321 0.832739C8.59836 0.368178 6.81627 1.39707 6.35171 3.13084L6.05183 4.25L3.5 4.25C1.70507 4.25 0.25 5.70507 0.25 7.5L0.25 14.5C0.25 16.2949 1.70507 17.75 3.5 17.75L8.5 17.75C10.0651 17.75 11.3719 16.6436 11.6808 15.1703C13.4104 15.6262 15.1847 14.5981 15.6481 12.8687L17.4599 6.10725C17.9244 4.37349 16.8955 2.5914 15.1618 2.12683L10.3321 0.832739ZM11.75 13.636L12.0559 13.7179C12.9895 13.9681 13.9491 13.4141 14.1992 12.4805L16.011 5.71903C16.2611 4.78546 15.7071 3.82587 14.7735 3.57572L9.9439 2.28163C9.01034 2.03148 8.05075 2.5855 7.8006 3.51907L7.60474 4.25L8.5 4.25C10.2949 4.25 11.75 5.70507 11.75 7.5L11.75 13.636ZM1.75 7.5C1.75 6.5335 2.5335 5.75 3.5 5.75L8.5 5.75C9.4665 5.75 10.25 6.5335 10.25 7.5L10.25 14.5C10.25 15.4665 9.4665 16.25 8.5 16.25H3.5C2.5335 16.25 1.75 15.4665 1.75 14.5L1.75 7.5Z" fill="currentColor"></path>
        </svg>
    )
}

export default CollectionsIcon;