import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Import Custom Component
import Tippy from '../../common/Tippy';
import ALink from '../../common/ALink';

import DiamondIcon from '../../icons/diamond';
import GoogleIcon from '../../icons/google';
import UploadIcon from '../../icons/upload';
import DotIcon from '../../icons/dot';

import ReportPage from '../popups/report-page';
import ShareSocials from '../popups/share-socials';

// Import Settings

export default function Content( { user } ) {
    let user_address = user.address
    let user_followers = user.followers
    let user_following = user.following
    if (user_address.length > 10) user_address = user_address.substring(0, 6) + '...' + user_address.substring(user_address.length - 4)

    return (
        <section className="profile-content-section text-center mt-5">
            <h1 className="section-title heading-border ls-n-10 border-0">{ user.name }</h1>
            <div className="d-flex mb-2">
                <h5 className="gradient-title mb-0 mr-3">@{ user.slug }</h5>
                <div className="clipboard">
                    <DiamondIcon height="16" width="16" primaryColor="#6B8CEF" secondaryColor="#6B8CEF" className="mr-2" />
                    <h5 className="clipboard-content mb-0">{ user_address }</h5>
                </div>
            </div>
            <h5>Hi.</h5>
            <ALink href={ user.website ? user.website : '#' } className="d-flex mb-2">
                <GoogleIcon height="16" width="16" className="mr-2"/>
                <h5 className="mb-0">{ user.website ? user.website : '' }</h5>
            </ALink>
            <div className="d-flex mb-2">
                <div className="mr-3">
                    <h5>{ user_followers } <span className="text-gray">followers</span></h5>
                </div>
                <div className="">
                    <h5>{ user_following } <span className="text-gray">following</span></h5>
                </div>
            </div>
            <div className="d-flex mb-2">
                <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent mr-2">Follow</button>
                <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent mr-2">Send Message</button>
                <Tippy tippyRef={<ShareSocials />} trigger="click" position="top">
                    <div className="tag-card mr-2" style={{ height: '56px', width: '56px' }}>
                        <UploadIcon width="16" height="16" />
                    </div>
                </Tippy>
                <Tippy tippyRef={<ReportPage />} trigger="click" position="top">
                    <div className="tag-card tag-lg-card" style={{ height: '56px' }}>
                        <DotIcon width="22" height="4" />
                    </div>
                </Tippy>
            </div>
        </section>
    )
}