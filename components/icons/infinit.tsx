import React from 'react';

interface InfinitIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    id?: number
}

const InfinitIcon: React.FC<InfinitIconProps> = ({
    children,
    className,
    fill,
    height,
    width,
    id,
    ...props
  }) => {
    return (
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 40" height={height} width={width} className={className} {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M33.8433 14.6655C31.0225 12.0107 26.6226 12.0107 23.8018 14.6655L20.3226 17.9401L16.8433 14.6655C14.0225 12.0107 9.62258 12.0107 6.80186 14.6655C3.72867 17.5579 3.72867 22.4421 6.80186 25.3345C9.62258 27.9893 14.0226 27.9893 16.8433 25.3345L20.3226 22.0599L23.8018 25.3345C26.6226 27.9893 31.0225 27.9893 33.8433 25.3345C36.9164 22.4421 36.9164 17.5579 33.8433 14.6655ZM18.1339 20L18.1339 20L14.7872 16.8501C13.1216 15.2825 10.5235 15.2825 8.85795 16.8501C7.0433 18.558 7.0433 21.442 8.85795 23.1499C10.5235 24.7175 13.1216 24.7175 14.7872 23.1499L18.1339 20ZM22.5112 20L25.8579 23.1499C27.5235 24.7175 30.1216 24.7175 31.7872 23.1499C33.6018 21.442 33.6018 18.558 31.7872 16.8501C30.1216 15.2825 27.5235 15.2825 25.8579 16.8501L22.5112 20L22.5112 20Z" fill="currentColor"/>
        </svg>
    )
}

export default InfinitIcon;