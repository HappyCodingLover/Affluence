import React from 'react';

interface BurnIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    primaryColor?: string;
    secondaryColor?: string;
    id?: number
}

const BurnIcon: React.FC<BurnIconProps> = ({
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
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 13" height={height} width={width} className={className} {...props}>
            <path d="M10 8.0447C10 6.40735 9.24321 4.77974 7.97575 3.69082L7.81084 3.554C7.61659 3.39296 7.32255 3.45439 7.21534 3.68628C7.16331 3.79905 7.12642 4.94094 7.12642 5.13334C7.12642 5.17218 7.11853 5.23588 7.11932 5.24271C7.11932 5.40504 6.97853 5.53391 6.81613 5.50628C6.68843 5.48467 6.60124 5.35987 6.60061 5.22646C6.59241 3.27368 6.01346 1.91177 4.95081 0.894839C4.30092 0.272949 3.53262 -0.276466 3.29739 0.152373C3.23747 0.261736 3.33664 0.507437 3.4366 0.822363C3.65875 1.52274 2.98064 2.6414 2.0222 3.75924C1.12131 4.80997 0 6.11777 0 8.0447C0 10.6379 2.38325 13 4.99984 13C7.61675 13 10 10.6379 10 8.0447Z" fill="currentColor"></path>
        </svg>
    )
}

export default BurnIcon;