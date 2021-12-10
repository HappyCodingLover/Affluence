import React from 'react';

interface BgImageProps {
    className?: string;
    style?: object;
    url?: string;
    color?: string;
    bgSize?: string;
    size?: string;
    position?: string;
    repeat?: string;
    width?: string;
    height?: string;
    id?: number
}

const BgImage: React.FC<BgImageProps> = ({
    children,
    className,
    style,
    url,
    color,
    bgSize,
    size,
    position,
    repeat,
    width,
    height,
    id,
    ...props
  }) => {
    let styleWidth = '100%'
    let styleHeight = '100%'
    let styleMarginRight = '1rem'
    if (width) {
        styleWidth = `${width}px`
    }
    if (height) {
        styleHeight = `${height}px`
    }
    if (size) {
        if (size == 'ssmall') {
            styleWidth = '32px'
            styleHeight = '32px'
            styleMarginRight = '0.75rem'
        } else if (size == 'small') {
            styleWidth = '36px'
            styleHeight = '36px'
            styleMarginRight = '1rem'
        } else if (size == 'mediumn') {
            styleWidth = '72px'
            styleHeight = '72px'
            styleMarginRight = '2rem'
        } else if (size == 'large') {
            styleWidth = '120px'
            styleHeight = '120px'
            styleMarginRight = '3rem'
        }
    }

    const styling = {
        backgroundImage: url ? `url('${url}')` : color,
        backgroundSize: bgSize,
        backgroundPosition: position,
        backgroundRepeat: repeat,
        width: styleWidth,
        height: styleHeight,
        marginRight: styleMarginRight
    }

    return (
        <div className="bg-image">
            <div style={styling} className={ className } { ...props }>
                { children }
            </div>
        </div>
    )
}

export default BgImage;