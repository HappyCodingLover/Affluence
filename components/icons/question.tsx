import React from 'react';

interface QuestionIconProps {
    className?: string;
    style?: object;
    fill?: string;
    height?: string;
    width?: string;
    id?: number
}

const QuestionIcon: React.FC<QuestionIconProps> = ({
    children,
    className,
    fill,
    height,
    width,
    id,
    ...props
  }) => {
    return (
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12" height={height} width={width} className={className} {...props}>
            <path d="M4.65936 7.67C4.65936 6.995 5.01936 6.605 5.54436 6.215L6.11436 5.795C7.01436 5.12 7.56936 4.295 7.56936 3.095C7.56936 1.595 6.35436 0.139999 3.92436 0.139999C1.73436 0.139999 0.429355 1.625 0.429355 3.38C0.429355 3.575 0.444355 3.8 0.489355 4.01L2.58936 4.085C2.57436 4.025 2.54436 3.875 2.54436 3.53C2.54436 2.825 3.05436 2.12 3.92436 2.12C4.82436 2.12 5.25936 2.69 5.25936 3.275C5.25936 3.665 5.12436 4.025 4.71936 4.325L3.95436 4.895C3.09936 5.54 2.81436 6.305 2.81436 7.01C2.81436 7.25 2.82936 7.46 2.87436 7.67H4.65936ZM2.52936 9.86C2.52936 10.565 3.09936 11.15 3.81936 11.15C4.53936 11.15 5.12436 10.565 5.12436 9.86C5.12436 9.14 4.53936 8.555 3.81936 8.555C3.09936 8.555 2.52936 9.14 2.52936 9.86Z" fill="currentColor"></path>
        </svg>
    )
}

export default QuestionIcon;