import React from 'react';

interface BloctoIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    primaryColor?: string;
    secondaryColor?: string;
    thirdColor?: string;
    id?: number
}

const BloctoIcon: React.FC<BloctoIconProps> = ({
    children,
    className,
    fill,
    height,
    width,
    primaryColor,
    secondaryColor,
    thirdColor,
    id,
    ...props
  }) => {
    return (
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height={height} width={width} className={className} {...props}>
            <path d="M6 3.5C6 3.22386 6.22386 3 6.5 3C10.9183 3 14.5 6.58172 14.5 11V18C14.5 18.2761 14.2761 18.5 14 18.5H6.5C6.22386 18.5 6 18.2761 6 18V3.5Z" fill={primaryColor ? primaryColor : '#182A71'} />
            <path d="M16.5 9.875C16.5 9.66789 16.6679 9.5 16.875 9.5C21.6385 9.5 25.5 13.3615 25.5 18.125C25.5 18.3321 25.3321 18.5 25.125 18.5H20.5C18.2909 18.5 16.5 16.7091 16.5 14.5V9.875Z" fill={secondaryColor ? secondaryColor : '#3485C4'}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M25.8169 20.5479C25.8623 20.2558 25.6302 20 25.3345 20H6.53747C6.2418 20 6.00967 20.2558 6.05507 20.5479C6.79906 25.3357 10.9396 29 15.936 29C20.9324 29 25.0729 25.3357 25.8169 20.5479Z" fill={thirdColor ? thirdColor : '#3485C4'}/>
        </svg>
    )
}

export default BloctoIcon;