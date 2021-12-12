import React from 'react';

import ListingIcon from '../icons/listing';
import DiamondIcon from '../icons/diamond';
import LightningIcon from '../icons/lightning';
import TransferIcon from '../icons/transfer';
import BurnIcon from '../icons/burn';
import LoveIcon from '../icons/love';
import BidIcon from '../icons/bid';
import FollowingIcon from '../icons/following';

interface TagIconProps {
    className?: string;
    style?: object;
    name?: any;
    fill?: string;
    height?: string;
    width?: string;
    primaryColor?: string;
    secondaryColor?: string;
    id?: number
}
const TagIcon: React.FC<TagIconProps> = ({
    children,
    className,
    style,
    name,
    fill,
    height,
    width,
    primaryColor,
    secondaryColor,
    id,
    ...props
  }) => {    
    return (
        <>
            {
                (name == 'listing' || name == 'listings' || name == 'tag' || name == 'tags') && (
                    <ListingIcon height={ height } width={ width } fill={ fill } primaryColor={ primaryColor } secondaryColor={ secondaryColor } className={ className } { ...props } />
                )
            }
            {
                (name == 'diamond' || name == 'purchase') && (
                    <DiamondIcon height={ height } width={ width } fill={ fill } primaryColor={ primaryColor } secondaryColor={ secondaryColor } className={ className } { ...props } />
                )
            }
            {
                (name == 'lightning' || name == 'sale' || name == 'sales') && (
                    <LightningIcon height={ height } width={ width } fill={ fill } className={ className } { ...props } />
                )
            }
            {
                (name == 'transfer') && (
                    <TransferIcon height={ height } width={ width } fill={ fill } primaryColor={ primaryColor } secondaryColor={ secondaryColor } className={ className } { ...props } />
                )
            }
            {
                (name == 'burn' || name == 'burns') && (
                    <BurnIcon height={ height } width={ width } fill={ fill } primaryColor={ primaryColor } secondaryColor={ secondaryColor } className={ className } { ...props } />
                )
            }
            {
                (name == 'like' || name == 'love' || name == 'likes' || name == 'loves') && (
                    <LoveIcon height={ height } width={ width } fill={ fill } primaryColor={ primaryColor } secondaryColor={ secondaryColor } className={ className } { ...props } />
                )
            }
            {
                (name == 'bid' || name == 'bids') && (
                    <BidIcon height={ height } width={ width } fill={ fill } primaryColor={ primaryColor } secondaryColor={ secondaryColor } className={ className } { ...props } />
                )
            }
            {
                (name == 'following' || name == 'followings') && (
                    <FollowingIcon height={ height } width={ width } fill="none" primaryColor={ primaryColor } secondaryColor={ secondaryColor } className={ className } { ...props } />
                )
            }
        </>
    )
}

export default TagIcon;