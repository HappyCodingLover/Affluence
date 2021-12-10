// Import Custom Component
import ALink from '../../common/ALink';

import EtherscanIcon from '../../icons/etherscan';
import MetadataIcon from '../../icons/metadata';
import IpfsIcon from '../../icons/ipfs';
import DotIcon from '../../icons/dot';
import ShareIcon from '../../icons/share';

// Import Settings

export default function Description( { desc, className } ) {
    return (
        <div className={`artwork-description ${className}`}>
            <h2 className="block-title">Description</h2>
            {desc.paragraphs.map((paragraph, index) => (
                <p key={"" + index}><div dangerouslySetInnerHTML={{ __html: paragraph }}></div></p>
            ))}
            <hr className="my-4"/>
            <p>{ desc.footer_paragraph }</p>
        </div>
    )
}