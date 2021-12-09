import React from 'react';

import { Tooltip } from 'react-tippy';

import 'react-tippy/dist/tippy.css';

interface TippyProps {
    className?: string;
    style?: object;
    tippyRef?: any,
    theme?: string;
    position?: string;
    id?: number
}

const Tippy: React.FC<TippyProps> = ({
    children,
    className,
    style,
    tippyRef,
    theme,
    position,
    id,
    ...props
  }) => {
    return (
        <Tooltip
            html={tippyRef}
            position={position == 'top' ? 'top' : (position == 'bottom' ? 'bottom' : (position == 'left' ? 'left' : (position == 'right' ? 'right' : 'top')))}
            trigger="mouseenter"
            theme={theme == 'light' ? 'light' : (theme == 'dark' ? 'dark' : (theme == 'transparent' ? 'transparent' : 'light'))}
            interactive
            className={className}
            {...props}
        >
            {children}
        </Tooltip>
    )
}

export default Tippy;