// Import Custom Component
import Tippy from '../../common/Tippy';

import DotIcon from '../../icons/dot';
import ShareIcon from '../../icons/share';

import Report from '../popups/report';
import Share from '../popups/share';

// Import Settings

export default function Actions( { actions, className } ) {
    return (
        <div className={`artwork-actions ${className}`}>
            <div className="py-5">
                <div className="d-flex flex-wrap-wrap">
                    <Tippy tippyRef={<Report />} trigger="click" position="top">
                        <div className="tag-card" style={{ height: '56px', width: '56px' }}>
                            <DotIcon width="22" height="4" />
                        </div>
                    </Tippy>
                    <Tippy tippyRef={<Share />} trigger="click" position="top">
                        <div className="tag-card tag-lg-card" style={{ height: '56px' }}>
                            <ShareIcon width="22" height="24" />
                            <p className="mb-0 ml-2">Share</p>
                        </div>
                    </Tippy>
                </div>
            </div>
        </div>
    )
}