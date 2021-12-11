import React from 'react';

interface IpfsIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    id?: number
}

const IpfsIcon: React.FC<IpfsIconProps> = ({
    children,
    className,
    fill,
    height,
    width,
    id,
    ...props
  }) => {
    return (
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 20" height={height} width={width} className={className} {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.396 9.535a.814.814 0 000 .93c.749 1.06 2.03 2.657 3.71 3.98C8.791 15.77 10.788 16.75 13 16.75c2.211 0 4.208-.98 5.893-2.306 1.681-1.322 2.962-2.92 3.71-3.98a.814.814 0 000-.929c-.748-1.06-2.029-2.657-3.71-3.98C17.208 4.23 15.211 3.25 13 3.25c-2.212 0-4.209.98-5.894 2.306-1.68 1.322-2.961 2.92-3.71 3.98zM5.56 3.591C7.5 2.065 10.03.75 13 .75c2.97 0 5.499 1.315 7.439 2.84 1.943 1.53 3.384 3.339 4.209 4.506l.003.005a3.315 3.315 0 010 3.798l-.003.005c-.825 1.167-2.266 2.977-4.209 4.505-1.94 1.526-4.47 2.841-7.44 2.841-2.969 0-5.499-1.315-7.439-2.84-1.942-1.53-3.384-3.339-4.208-4.506l-.004-.005a3.314 3.314 0 010-3.798l.004-.005C2.176 6.929 3.618 5.119 5.56 3.59z" fill="currentColor"></path>
        </svg>
    )
}

export default IpfsIcon;