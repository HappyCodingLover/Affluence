// Import Custom Component

// Import Settings
import UserAvatar from '../../common/UserAvatar';

export default function Banner( { user } ) {
    return (
        <section className="banner-section profile-banner-section">
            <div className="banner-space"></div>
            <div className="banner-avatar">
                <UserAvatar user={ user } size="large" />
            </div>
        </section>
    )
}