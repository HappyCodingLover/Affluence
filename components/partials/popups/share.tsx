// Import Custom Component
import TwitterIcon from '../../icons/twitter';
import LinkIcon from '../../icons/link';

// Import Settings

export default function Share( { } ) {
    return (
        <div className="p-3">
        <div className="mb-1 d-flex align-items-center">
            <TwitterIcon height="18" width="18" className="mr-2" />
            <h5 className="mb-0">Twitter</h5>
        </div>
        <div className="d-flex align-items-center">
            <LinkIcon height="16" width="16" className="mr-2" />
            <h5 className="mb-0">Copy Link</h5>
        </div>
        </div>
    )
}