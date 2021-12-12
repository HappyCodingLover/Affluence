import React, { useState, useEffect } from 'react';

import Tippy from './Tippy';

import ArrowDownIcon from '../icons/arrow-down';
import SortIcon from '../icons/sort';

interface ASelectProps {
    className?: string;
    style?: object;
    selects?: any;
    icon?: string;
    iconPos?: string;
    id?: number
}

const ASelect: React.FC<ASelectProps> = ({
    children,
    className,
    style,
    selects,
    icon,
    iconPos,
    id,
    ...props
  }) => {
    const [selectValue, setSelectValue] = useState(false);

    if (!iconPos) iconPos = 'right'

    useEffect(() => {
        if (!selectValue) {
            if (typeof selects[0] == 'object') {
                setSelectValue( selects[0].name )
            } else {
                setSelectValue( selects[0] )
            }
        }
    }, [selectValue, selects])

    function changeSelect( value ) {
        setSelectValue( value )
    }

    const selectListRef = (
        <ul className="filter-list a-select-list">
            { selects.map((select, index) => (
                <li key={"" + index}  onClick={ () => changeSelect( typeof select == 'object' ? select.name : select ) } className="d-flex align-items-center">
                    { typeof select == 'object' && (
                        <>
                            <img src={ select.image } className="d-inline rounded-circle mr-3" width="16" height="16" alt={ select.name } />
                            { select.name }
                        </>
                    )}
                    { typeof select != 'object' && (
                        <>
                            { select }
                        </>
                    )}
                </li>
            ))}
        </ul>
    )

    return (
        <div className={`a-select ${className}`}>
            <Tippy tippyRef={ selectListRef } className="flex-grow-1 d-flex justify-content-between align-items-center" trigger="click" position="bottom" {...props}>
                {
                    iconPos == 'left' && (
                        <>
                            {
                                icon == 'down' && (
                                    <ArrowDownIcon width="16" height="16" className="mr-2" />
                                )
                            }
                            {
                                icon == 'sort' && (
                                    <SortIcon width="16" height="16" className="mr-2" />
                                )
                            }
                        </>
                    )
                }
                <span>{ selectValue }</span>
                {
                    iconPos == 'right' && (
                        <>
                            {
                                icon == 'down' && (
                                    <ArrowDownIcon width="16" height="16" className="ml-2" />
                                )
                            }
                            {
                                icon == 'sort' && (
                                    <SortIcon width="16" height="16" className="ml-2" />
                                )
                            }
                        </>
                    )
                }
            </Tippy>
        </div>
    )
}

export default ASelect;