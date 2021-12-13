import React, { useState, useEffect } from 'react';

import ToggleCheckbox from '../../common/ToggleCheckbox';
import PriceSelect from '../../common/PriceSelect';

import ListingIcon from '../../icons/listing';
import InfinitIcon from '../../icons/infinit';
import TimedIcon from '../../icons/timed';
import RoundCircleIcon from '../../icons/round-circle';
import RaribleIcon from '../../icons/rarible';
import QuestionIcon from '../../icons/question';

interface PutOnMarketplaceProps {
  className?: string;
  style?: object;
  href?: any;
  id?: number
}
const PutOnMarketplace: React.FC<PutOnMarketplaceProps> = ({
  children,
  className,
  style,
  href,
  id,
  ...props
  }) => {
    const [ formData, setFormData ] = useState( {
      'allow_price': true,
      'content_unblock': true,
      'content': '',
      'enable_collection': true,
      'price_type': '',
      'collection': '',
      'minting': '',
      'name': '',
      'description': '',
      'royalties': '',
      'number_of_copies': '',
      'show_advanced_settings': false,
      'size': '',
      'model': '',
      'image_description': '',
    } );

    function changeAllowPrice( value ) {
      setFormData({
        ...formData,
        'allow_price': value
      })
    }

    function changeContentUnblock( value ) {
      setFormData({
        ...formData,
        'content_unblock': value
      })
    }

    function changeContentValue( e ) {
      setFormData({
        ...formData,
        'content': e.target.value
      })
    }

    function changeEnableCollection( value ) {
      setFormData({
        ...formData,
        'enable_collection': value
      })
    }

    function changePriceType( value ) {
      setFormData({
        ...formData,
        'price_type': value
      })
    }

    function changeCollection( value ) {
      setFormData({
        ...formData,
        'collection': value
      })
    }

    function changeEnableMinting( value ) {
      setFormData({
        ...formData,
        'minting': value
      })
    }

    function changeName( value ) {
      setFormData({
        ...formData,
        'name': value
      })
    }

    function changeDescription( value ) {
      setFormData({
        ...formData,
        'description': value
      })
    }

    function changeRoyalties( value ) {
      formData.royalties = value
      setFormData( formData )
    }

    function changeNumberOfCopies( value ) {
      setFormData({
        ...formData,
        'number_of_copies': value
      })
    }

    function changeAdvancedSettingsVisible( ) {
      setFormData({
        ...formData,
        'show_advanced_settings': !formData.show_advanced_settings
      })
    }    

    function changeSize( value ) {
      setFormData({
        ...formData,
        'size': value
      })
    }

    function changeModel( value ) {
      setFormData({
        ...formData,
        'model': value
      })
    }

    function changeImageDescription( value ) {
      setFormData({
        ...formData,
        'image_description': value
      })
    }

    function submitForm() {

    }

    useEffect(() => {
    }, [formData])

    return (
      <div className={`put-on-marketplace ${ className ? className : '' }`} {...props}>
        <div className="d-flex justify-content-between">
          <div>
            <h4>Put on marketplace</h4>
            Enter price to allow users instantly purchase your NFT
          </div>
          <ToggleCheckbox callbackFunc={ changeAllowPrice } />
        </div>
        {
          !!formData.allow_price && (
            <div className="row mt-3">
              <div className="col-md-4">
                <button className={`btn-with-icon ${ formData.price_type == 'fixed' ? 'active' : '' }`} onClick={() => changePriceType( 'fixed' ) }>
                  <ListingIcon width="31" height="30" />
                  Fixed price
                </button>
              </div>
              <div className="col-md-4">
                <button className={`btn-with-icon ${ formData.price_type == 'infinit' ? 'active' : '' }`} onClick={() => changePriceType( 'infinit' ) }>
                  <InfinitIcon width="41" height="40" />
                  Open for bids
                </button>
              </div>
              <div className="col-md-4">
                <button className="btn-with-icon disabled" disabled>
                  <TimedIcon width="41" height="40" />
                  Timed auction
                </button>
              </div>
            </div>
          )
        }
        {
          formData.price_type == 'fixed' && (
            <div className="row mt-3">
              <div className="col-md-12">
                <h4>Price</h4>
                <PriceSelect placeholder="Enter price for one piece" fee={ 0.25 } />
              </div>
            </div>
          )
        }

        <div className="d-flex justify-content-between mt-3">
          <div>
            <h4>Unlock once purchased</h4>
            Content will be unlocked after successful transaction
          </div>
          <ToggleCheckbox callbackFunc={ changeContentUnblock } />
        </div>
        {
          !!formData.content_unblock && (
            <>
              <input className="text-material form-control" type="text" value={ formData.content } placeholder="Digital key, code to redeem or link to a file..." onChange={ changeContentValue } />
              Markdown is supported
            </>
          )
        }

        <div className="d-flex justify-content-between mt-3">
          <div>
            <h4>Choose collection</h4>
          </div>
          <ToggleCheckbox callbackFunc={ changeEnableCollection } />
        </div>
        {
          !!formData.enable_collection && (
            <div className="row mt-1">
              <div className="col-md-4">
                <button className={`btn-with-icon ${ formData.collection == 'create' ? 'active' : '' }`} onClick={() => changeCollection( 'create' ) }>
                  <RoundCircleIcon width="42" height="42" />
                  <h5 className="mb-0">Create</h5>
                  <p className="mb-0">ERC-1155</p>
                </button>
              </div>
              <div className="col-md-4">
                <button className={`btn-with-icon ${ formData.collection == 'rari' ? 'active' : '' }`} onClick={() => changeCollection( 'rari' ) }>
                  <RaribleIcon width="42" height="42" />
                  <h5 className="mb-0 text-ellipsis">Rarible Multiples</h5>
                  <p className="mb-0">RARI</p>
                </button>
              </div>
            </div>
          )
        }

        <div className="d-flex justify-content-between mt-3">
          <div>
            <h4>Free minting</h4>
            Buyer will pay gas fees for minting
          </div>
          <ToggleCheckbox callbackFunc={ changeEnableMinting } />
        </div>
        
        <div className="row mt-3">
          <div className="col-md-12">
            <h4>Name</h4>
            <input className="text-material form-control" type="text" value={ formData.name } placeholder='e. g. "Redeemable T-Shirt with logo"' onChange={ changeName } />
          </div>
        </div>
        
        <div className="row mt-3">
          <div className="col-md-12">
            <h4>Description (Optional)</h4>
            <input className="text-material form-control" type="text" value={ formData.name } placeholder='e. g. "After purchasing you’ll be able to get the real T-Shirt"' onChange={ changeDescription } />
            With preserved line-breaks
          </div>
        </div>
        
        <div className="row mt-3">
          <div className="col-md-6">
            <h4>Royalties</h4>
            <div className="input-group align-items-center mb-1">
              <input className="text-material form-control" inputMode="decimal" step="0.00000001" type="number" value={ formData.royalties } placeholder='E. g. 10%"' onChange={ changeRoyalties } />
              <div className="text-icon">%</div>
            </div>
            Suggested: 0%, 10%, 20%, 30%. Maximum is 50%
          </div>
          <div className="col-md-6">
            <h4>Number of copies</h4>
            <input className="text-material form-control" type="text" value={ formData.number_of_copies } placeholder='E. g. 10"' onChange={ changeNumberOfCopies } />
            Amount of tokens
          </div>
        </div>
        
        <div className="row mt-3">
          <div className="col-md-12">
            <button className="btn-default btn-rounded w-100" onClick={() => changeAdvancedSettingsVisible( ) }>
              <h5 className="mb-0">
                {
                  !!formData.show_advanced_settings && (
                    <>Hide advanced settings</>
                  )
                }
                {
                  !formData.show_advanced_settings && (
                    <>Show advanced settings</>
                  )
                }
              </h5>
            </button>
          </div>
        </div>

        {
          !!formData.show_advanced_settings && (
            <div className="row mt-3">
              <div className="col-md-12">
                <h4>Properties (Optional)</h4>
              </div>
              <div className="col-md-6">
                <div className="input-group align-items-center mb-1">
                  <input className="text-material form-control" type="text" value={ formData.size } placeholder="e.g. Size" onChange={ changeSize } />
                  <div className="text-icon">%</div>
                </div>
              </div>
              <div className="col-md-6">
                <input className="text-material form-control" type="text" value={ formData.model } placeholder="e.g. M" onChange={ changeModel } />
              </div>
              <div className="col-md-12">
                <h4>Alternative text for NFT (Optional)</h4>
                <input className="text-material form-control" type="text" value={ formData.image_description } placeholder="Image description in details (do not start with word “image”)" onChange={ changeImageDescription } />
                Text that will be used in VoiceOver for people with disabilities
              </div>
            </div>
          )
        }

        <div className="row mt-3 align-items-center">
          <div className="col-md-6">
            <button className="btn-default btn-rounded btn-blue w-100" onClick={() => submitForm( ) }>
              <h5 className="mb-0 text-white">Create item</h5>
            </button>
          </div>
          <div className="col-md-6 text-right">
            Unsaved changes <button className="btn-rounded"><QuestionIcon width="10" height="10" /></button>          </div>
        </div>
      </div>
    )
}

export default PutOnMarketplace;