// Import Custom Component
import ALink from '../../common/ALink';

// Import Settings

export default function Tags( { tags, className } ) {
    return (
        <div className={`artwork-tags ${className}`}>
            <p className="h3">Tags</p>
            <div className="d-flex flex-wrap-wrap">
                {tags.map((tag, index) => (
                    <ALink className="tag-card" href={`/tags/${tag}`} key={"" + index}>
                        {tag}
                    </ALink>
                ))}
            </div>
        </div>
    )
}