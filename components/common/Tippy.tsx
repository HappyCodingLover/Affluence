import React from 'react';

import { Tooltip } from 'react-tippy';

import 'react-tippy/dist/tippy.css';

interface TippyProps {
    className?: string;
    style?: object;
    tippyRef?: any,
    theme?: string;
    position?: string;
    trigger?: string;
    id?: number
}

const Tippy: React.FC<TippyProps> = ({
    children,
    className,
    style,
    tippyRef,
    theme,
    position,
    trigger,
    id,
    ...props
  }) => {
    const styling = {
        cursor: 'pointer',
    }

    return (
        <Tooltip
            html={tippyRef}
            position={position == 'top' ? 'top' : (position == 'left' ? 'left' : (position == 'right' ? 'right' : 'bottom'))}
            trigger={trigger == 'focus' ? 'focus' : (trigger == 'click' ? 'click' : (trigger == 'manual' ? 'manual' : 'mouseenter'))}
            theme={theme == 'dark' ? 'dark' : (theme == 'transparent' ? 'transparent' : 'light')}
            interactive
            className={className}
            style={styling}
            {...props}
        >
            {children}
        </Tooltip>
    )
}

export default Tippy;