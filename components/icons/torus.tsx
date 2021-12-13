import React from 'react';

interface TorusIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    primaryColor?: string;
    id?: number
}

const TorusIcon: React.FC<TorusIconProps> = ({
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
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 23" height={height} width={width} className={className} {...props}>
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M6 0H0.5V7H6V22.5H13V7V0H6ZM21.5 3.5C21.5 5.433 19.933 7 18 7C16.067 7 14.5 5.433 14.5 3.5C14.5 1.567 16.067 0 18 0C19.933 0 21.5 1.567 21.5 3.5Z" fill={primaryColor ? primaryColor : '#3A95FF'} />
        </svg>
    )
}

export default TorusIcon;