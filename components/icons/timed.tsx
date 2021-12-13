import React from 'react';

interface TimedIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    id?: number
}

const TimedIcon: React.FC<TimedIconProps> = ({
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
            <path fillRule="evenodd" clipRule="evenodd" d="M20.3226 9.5C14.5236 9.5 9.82263 14.201 9.82263 20C9.82263 25.799 14.5236 30.5 20.3226 30.5C26.1216 30.5 30.8226 25.799 30.8226 20C30.8226 14.201 26.1216 9.5 20.3226 9.5ZM6.82263 20C6.82263 12.5442 12.8668 6.5 20.3226 6.5C27.7785 6.5 33.8226 12.5442 33.8226 20C33.8226 27.4558 27.7785 33.5 20.3226 33.5C12.8668 33.5 6.82263 27.4558 6.82263 20Z" fill="currentColor"/>
            <path opacity="0.4" d="M12.3226 20C12.3226 15.5817 15.9044 12 20.3226 12V20H12.3226Z" fill="currentColor"/>
        </svg>
    )
}

export default TimedIcon;