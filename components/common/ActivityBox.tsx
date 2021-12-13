import React from 'react';

import ALink from "./ALink";
import UserAvatar from './UserAvatar';
import UserBanner from './UserBanner';

import GotoIcon from '../icons/goto';

import { getUser, getDateTime } from '../../utils';

interface ActivityBoxProps {
    className?: string;
    style?: object;
    activity?: any;
    id?: number
}
const ActivityBox: React.FC<ActivityBoxProps> = ({
    children,
    className,
    style,
    activity,
    id,
    ...props
  }) => {
    let user = getUser( activity.user )
    let last_edition = activity.editions[0]
    activity.editions.map((edition, index) => function() {
        if (edition.date > last_edition.date)
        last_edition = edition
    })
    let from_user = getUser( last_edition.from )
    let to_user = getUser( last_edition.to )
    
    return (
        <div className={`activity-box ${ className ? className : '' }`} id={ id ? '' + id : '' } style={ style } { ...props }>
            <div className="activity-box-avatar">
                <UserBanner user={ user } size="mediumn" />
            </div>
            <div className="activity-box-info">
                <ALink href={`/profile/${user.slug}`} className="activity-box-user">
                    { user.name }
                </ALink>
                <div className="activity-box-edition">
                    1 edition purchased by&nbsp;
                    <ALink href={`/profile/${to_user.slug}`} className="d-flex mr-1">
                        <UserAvatar user={ to_user } size="xxsmall" className="mr-1" />
                        { to_user.name }
                    </ALink>&nbsp;
                    for { last_edition.eth } ETH each from&nbsp;
                    <ALink href={`/profile/${from_user.slug}`} className="d-flex mr-1">
                        <UserAvatar user={ from_user } size="xxsmall" className="mr-1" />
                        { from_user.name }
                    </ALink>
                </div>
                <div className="activity-box-date">
                    {
                        !!last_edition.link && (
                            <>
                                { getDateTime(last_edition.date, '%m/%d/%y, %h:%i%A') }
                                <ALink href={last_edition.link}>
                                    <GotoIcon height="12" width="12" className="ml-2" />
                                </ALink>
                            </>
                        )
                    }
                    {
                        !last_edition.link && (
                            <>{ getDateTime(last_edition.date, '%m/%d/%y, %h:%i%A') }</>
                        )
                    }
                </div>
            </div>
            { children }
        </div>
    )
}

export default ActivityBox;