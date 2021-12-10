// Import Custom Component
import Tippy from '../../common/Tippy';

import DotIcon from '../../icons/dot';
import ShareIcon from '../../icons/share';
import NoneIcon from '../../icons/none';
import TwitterIcon from '../../icons/twitter';
import LinkIcon from '../../icons/link';

// Import Settings

export default function Actions( { actions, className } ) {
    const reporthRef = (
        <div className="d-flex align-items-center p-3">
            <div className="mr-3">
                <NoneIcon height="16" width="16" className="mr-2 text-secondary" />
            </div>
            <div>
                <h4 className="mb-0 text-secondary">Report</h4>
            </div>
        </div>
    )

    const shareRef = (
        <div className="p-3">
            <div className="mb-2 d-flex align-items-center">
                <TwitterIcon viewBox="0 0 28 24" height="24" width="24" className="mr-2" />
                <h4 className="mb-0">Twitter</h4>
            </div>
            <div className="mb-2 d-flex align-items-center">
                <LinkIcon viewBox="0 0 22 22" height="20" width="20" className="mr-2" />
                <h4 className="mb-0">Copy Link</h4>
            </div>
        </div>
    )

    return (
        <div className={`artwork-actions ${className}`}>
            <div className="py-5">
                <div className="d-flex flex-wrap-wrap">
                    <Tippy tippyRef={reporthRef} trigger="click" position="top">
                        <div className="tag-card" style={{ height: '56px', width: '56px' }}>
                            <DotIcon viewBox="0 0 22 4" width="22" height="4" />
                        </div>
                    </Tippy>
                    <Tippy tippyRef={shareRef} trigger="click" position="top">
                        <div className="tag-card tag-lg-card" style={{ height: '56px' }}>
                            <ShareIcon viewBox="0 0 22 24" width="22" height="24" />
                            <p className="mb-0 ml-2">Share</p>
                        </div>
                    </Tippy>
                </div>
            </div>
        </div>
    )
}