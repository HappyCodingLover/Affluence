import React, { useState } from 'react';

import ASelect from './ASelect';

import { getPriceFilters } from '../../utils';

interface PriceSelectProps {
  className?: string;
  style?: object;
  placeholder?: string;
  fee?: number;
  id?: number
}
const PriceSelect: React.FC<PriceSelectProps> = ({
  children,
  className,
  style,
  placeholder,
  fee,
  id,
  ...props
  }) => {
    const [ currencyValue, setCurrencyValue ] = useState( '' );
    const [ priceValue, setPriceValue ] = useState( 0 );

    function changePrice( e ) {
      setPriceValue( e.target.value )
    }

    function changeCurrency( currency ) {
      setCurrencyValue( currency )
    }

    return (
      <div className={`price-select ${ className ? className : '' }`} {...props}>
        <div className="price-select-head">
          <input inputMode="decimal" type="number" step="0.00000001" placeholder={ placeholder } onChange={ changePrice } />
          <ASelect selects={ getPriceFilters() } icon="down" callbackFunc={ changeCurrency } />
        </div>
        <div className="price-select-content">
          <p className="mb-1">Service fee { fee }%</p>
          <p className="mb-1">You will receive { priceValue } { currencyValue }</p>
        </div>
      </div>
    )
}

export default PriceSelect;