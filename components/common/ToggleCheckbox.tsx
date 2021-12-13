import React, { useState } from 'react';

interface ToggleCheckboxProps {
  className?: string;
  style?: object;
  href?: any;
  label?: string;
  callbackFunc?: any;
  id?: number
}
const ToggleCheckbox: React.FC<ToggleCheckboxProps> = ({
  children,
  className,
  style,
  href,
  label,
  callbackFunc,
  id,
  ...props
  }) => {
    const [ toggleValue, setToggleValue ] = useState( true );

    function changeToggleValue() {
      setToggleValue( !toggleValue );
      callbackFunc( !toggleValue );
    }

    function changeToggleInput() {
    }
    
    return (
      <div className={`toggle-checkbox ${ className ? className : '' } ${ toggleValue ? 'toggled' : '' }`} onClick={ changeToggleValue } {...props}>
        <input type="checkbox" hidden checked={ toggleValue ? true : false } onChange={ changeToggleInput }/>
        <span className="toggle" />
        { label }
      </div>
    )
}

export default ToggleCheckbox;