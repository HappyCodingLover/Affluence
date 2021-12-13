import React from 'react';

interface RoundCircleProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    id?: number
}

const RoundCircleIcon: React.FC<RoundCircleProps> = ({
    children,
    className,
    fill,
    height,
    width,
    id,
    ...props
  }) => {
    return (
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height={height} width={width} className={className} {...props}>
            <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z" color="currentColor"></path>
        </svg>
    )
}

export default RoundCircleIcon;