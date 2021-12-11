// Import Custom Component
import NoneIcon from '../../icons/none';

// Import Settings

export default function Report( { } ) {
    return (
        <div className="d-flex align-items-center p-3">
            <div className="mr-2">
                <NoneIcon height="12" width="12" className="text-secondary" />
            </div>
            <div>
                <h5 className="mb-0 text-secondary">Report</h5>
            </div>
        </div>
    )
}