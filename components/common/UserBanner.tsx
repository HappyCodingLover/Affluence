import React from 'react';

import BadgeIcon from '../icons/badge';

interface UserBannerProps {
    className?: string;
    style?: object;
    user?: any;
    width?: string;
    height?: string;
    size?: string;
    id?: number
}
const UserBanner: React.FC<UserBannerProps> = ({
    children,
    className,
    style,
    user,
    width,
    height,
    size,
    id,
    ...props
  }) => {
    let imgWidth = '120px'
    let imgHeight = '120px'
    let badgeWidth = '28'
    let badgeHeight = '28'
    if (width) {
        imgWidth = `${width}px`
        badgeWidth = `${parseInt(width) / 4}`
    }
    if (height) {
        imgHeight = `${height}px`
        badgeHeight = `${parseInt(height) / 4}`
    }
    if (size) {
        if (size == 'ssmall') {
            imgWidth = '32px'
            imgHeight = '32px'
            badgeWidth = '12'
            badgeHeight = '12'
        } else if (size == 'small') {
            imgWidth = '36px'
            imgHeight = '36px'
            badgeWidth = '16'
            badgeHeight = '16'
        } else if (size == 'mediumn') {
            imgWidth = '72px'
            imgHeight = '72px'
            badgeWidth = '20'
            badgeHeight = '20'
        } else if (size == 'large') {
            imgWidth = '120px'
            imgHeight = '120px'
            badgeWidth = '28'
            badgeHeight = '28'
        }
    }

    return (
        <div className="user-avatar" { ...props }>
            <img width={imgWidth} height={imgHeight} src={ user.avatar } />
            {
                user.verified && (
                    <div className="user-badge">
                        <BadgeIcon primaryColor={ user.avatar_color } secondaryColor="#000000" width={badgeWidth} height={badgeHeight} />
                    </div>
                )
            }
        </div>
    )
}

export default UserBanner;