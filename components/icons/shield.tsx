import React from 'react';

interface ShieldIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    primaryColor?: string;
    id?: number
}

const ShieldIcon: React.FC<ShieldIconProps> = ({
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
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 24" height={height} width={width} className={className} {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.1509 0.263503C10.6625 -0.0878342 11.3376 -0.0878342 11.8492 0.263503L12.6494 0.813024C14.196 1.87515 15.9989 2.50348 17.8707 2.63263L20.1033 2.78669C20.9117 2.84248 21.5297 3.5303 21.4989 4.3401L21.1641 13.151C21.0418 16.369 19.2976 19.3059 16.5305 20.9532L11.7673 23.7889C11.2945 24.0704 10.7055 24.0704 10.2327 23.7889L5.46949 20.9532C2.70242 19.3059 0.958244 16.369 0.835949 13.151L0.501101 4.3401C0.470326 3.5303 1.0883 2.84248 1.89676 2.78669L4.12937 2.63263C6.00111 2.50348 7.80407 1.87515 9.35068 0.813024L10.1509 0.263503ZM11 3.3195C9.02248 4.66482 6.72269 5.46082 4.33589 5.62552L3.55417 5.67946L3.83378 13.0371C3.91746 15.2389 5.11084 17.2484 7.0041 18.3755L11 20.7543L14.9959 18.3755C16.8892 17.2484 18.0826 15.2389 18.1663 13.0371L18.4459 5.67946L17.6642 5.62552C15.2774 5.46082 12.9776 4.66482 11 3.3195Z" fill={primaryColor ? primaryColor : '#4275B6'}/>
        </svg>
    )
}

export default ShieldIcon;