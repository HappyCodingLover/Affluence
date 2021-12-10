import React from 'react';

interface DotIconProps {
    className?: string;
    style?: object;
    viewBox?: string,
    fill?: string;
    height?: string;
    width?: string;
    id?: number
}

const DotIcon: React.FC<DotIconProps> = ({
    children,
    className,
    viewBox,
    fill,
    height,
    width,
    id,
    ...props
  }) => {
    return (
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} height={height} width={width} className={className} {...props}>
            <path d="M11 4a2 2 0 100-4 2 2 0 000 4zM2 4a2 2 0 100-4 2 2 0 000 4zM20 4a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"></path>
        </svg>
    )
}

export default DotIcon;