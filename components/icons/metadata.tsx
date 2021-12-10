import React from 'react';

interface MetadataIconProps {
    className?: string;
    style?: object;
    viewBox?: string,
    fill?: string;
    height?: string;
    width?: string;
    id?: number
}

const MetadataIcon: React.FC<MetadataIconProps> = ({
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
            <path d="M19.21 5.222L10.639.936a1.428 1.428 0 00-1.279 0L.789 5.222A1.431 1.431 0 000 6.5v10c0 .54.306 1.035.79 1.278l8.571 4.286a1.43 1.43 0 001.278 0l8.571-4.286A1.43 1.43 0 0020 16.5v-10a1.43 1.43 0 00-.79-1.278zM10 3.812L15.377 6.5 10 9.189 4.623 6.501 10 3.81zm-7.143 5l5.714 2.857v6.806l-5.714-2.857V8.812zm8.572 9.663v-6.806l5.714-2.857v6.806l-5.714 2.857z" fill="currentColor"></path>
        </svg>
    )
}

export default MetadataIcon;