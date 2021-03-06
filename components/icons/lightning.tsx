import React from 'react';

interface LightningIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    id?: number
}

const LightningIcon: React.FC<LightningIconProps> = ({
    children,
    className,
    fill,
    height,
    width,
    id,
    ...props
  }) => {
    return (
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16" height={height} width={width} className={className} {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.93206 0.721796C8.20353 0.839642 8.36482 1.12235 8.32811 1.41602L7.75512 6H12.9999C13.2586 6 13.4939 6.14964 13.6037 6.38389C13.7134 6.61815 13.6777 6.89473 13.5121 7.09345L6.84541 15.0935C6.65594 15.3208 6.33927 15.396 6.0678 15.2782C5.79632 15.1603 5.63503 14.8776 5.67174 14.584L6.24474 10H0.999927C0.741248 10 0.50592 9.85036 0.3962 9.6161C0.286481 9.38184 0.322177 9.10526 0.487779 8.90654L7.15445 0.90654C7.34391 0.679184 7.66058 0.60395 7.93206 0.721796ZM2.42329 8.66666H6.99993C7.19115 8.66666 7.37316 8.74877 7.49971 8.89213C7.62626 9.03548 7.68516 9.22627 7.66145 9.41602L7.27682 12.493L11.5766 7.33333H6.99993C6.80871 7.33333 6.62669 7.25122 6.50014 7.10786C6.37359 6.96451 6.31469 6.77372 6.33841 6.58397L6.72303 3.50697L2.42329 8.66666Z" fill="currentColor"></path>
        </svg>
    )
}

export default LightningIcon;