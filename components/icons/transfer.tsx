import React from 'react';

interface TransferIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    primaryColor?: string;
    secondaryColor?: string;
    id?: number
}

const TransferIcon: React.FC<TransferIconProps> = ({
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
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 14" height={height} width={width} className={className} {...props}>
            <path d="M3 4H11.5" stroke="currentColor" strokeWidth="2"></path>
            <path d="M5 1L2 4L5 7" stroke="currentColor" strokeWidth="2"></path>
            <path d="M10.5 10H2" stroke="currentColor" strokeWidth="2"></path>
            <path d="M8.5 7L11.5 10L8.5 13" stroke="currentColor" strokeWidth="2"></path>
        </svg>
    )
}

export default TransferIcon;