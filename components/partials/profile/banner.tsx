// Import Custom Component

// Import Settings
import UserBanner from '../../common/UserBanner';

export default function Banner( { user } ) {
    return (
        <section className="banner-section profile-banner-section">
            <div className="banner-space"></div>
            <div className="banner-avatar">
                <UserBanner user={ user } size="large" />
            </div>
        </section>
    )
}