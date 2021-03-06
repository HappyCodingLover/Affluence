import React from 'react';

interface SortIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    id?: number
}

const SortIcon: React.FC<SortIconProps> = ({
    children,
    className,
    fill,
    height,
    width,
    id,
    ...props
  }) => {
    return (
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10" height={height} width={width} className={className} {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.333252 0.99998C0.333252 0.63179 0.631729 0.333313 0.999919 0.333313H12.9999C13.3681 0.333313 13.6666 0.63179 13.6666 0.99998C13.6666 1.36817 13.3681 1.66665 12.9999 1.66665H0.999919C0.631729 1.66665 0.333252 1.36817 0.333252 0.99998ZM1.66659 4.99998C1.66659 4.63179 1.96506 4.33331 2.33325 4.33331H11.6666C12.0348 4.33331 12.3333 4.63179 12.3333 4.99998C12.3333 5.36817 12.0348 5.66665 11.6666 5.66665H2.33325C1.96506 5.66665 1.66659 5.36817 1.66659 4.99998ZM2.99992 8.99998C2.99992 8.63179 3.2984 8.33331 3.66659 8.33331H10.3333C10.7014 8.33331 10.9999 8.63179 10.9999 8.99998C10.9999 9.36817 10.7014 9.66665 10.3333 9.66665H3.66659C3.2984 9.66665 2.99992 9.36817 2.99992 8.99998Z" fill="currentColor"></path>
        </svg>
    )
}

export default SortIcon;