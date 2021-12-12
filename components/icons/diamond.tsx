import React from 'react';

interface DiamondIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    primaryColor?: string;
    secondaryColor?: string;
    id?: number
}

const DiamondIcon: React.FC<DiamondIconProps> = ({
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
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" height={height} width={width} className={className} {...props}>
            <path opacity="0.1" d="M20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40Z" fill={primaryColor}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M28.7497 20.2746L19.3775 5V16.0875L27.5829 19.7536L19.3775 16.0897V25.7159L28.7497 20.2749L28.75 20.275L28.7499 20.2748L28.75 20.2747L28.7497 20.2746ZM19.375 16.0875V5L10.004 20.2746L10.0038 20.2747L10.0039 20.2748L10.0038 20.275L10.0041 20.2749L19.375 25.7159V16.0897L11.1707 19.7536L19.375 16.0875ZM19.375 27.4599V34.9936L9.99752 22.0199L19.375 27.4599ZM19.3775 27.4586V34.9936L28.75 22.0199L19.3775 27.4586Z" fill={secondaryColor}/>
        </svg>
    )
}

export default DiamondIcon;