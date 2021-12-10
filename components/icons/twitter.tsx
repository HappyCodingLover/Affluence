import React from 'react';

interface TwitterIconProps {
    className?: string;
    style?: object;
    viewBox?: string,
    fill?: string;
    height?: string;
    width?: string;
    id?: number
}

const TwitterIcon: React.FC<TwitterIconProps> = ({
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
            <path d="M27.946 3.33a11.667 11.667 0 01-3.296.904 5.784 5.784 0 002.524-3.176 11.857 11.857 0 01-3.648 1.381 5.74 5.74 0 00-9.93 3.918c0 .455.053.892.149 1.311-4.772-.225-9.001-2.517-11.832-5.98a5.626 5.626 0 00-.777 2.887A5.74 5.74 0 003.69 9.354a5.722 5.722 0 01-2.6-.719v.071a5.743 5.743 0 004.604 5.632 5.829 5.829 0 01-2.58.099 5.76 5.76 0 005.371 3.987 11.513 11.513 0 01-7.119 2.455c-.455 0-.909-.027-1.365-.078a16.327 16.327 0 008.816 2.577c10.563 0 16.333-8.745 16.333-16.317 0-.244 0-.49-.018-.735 1.121-.804 2.1-1.82 2.87-2.972l-.055-.024z" fill="currentColor"></path>
        </svg>
    )
}

export default TwitterIcon;