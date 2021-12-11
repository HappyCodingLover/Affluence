// Import Custom Component

// Import Settings

export default function Description( { desc, className } ) {
    console.log(desc)
    return (
        <div className={`artwork-description ${ className }`}>
            <h2 className="block-title">Description</h2>
            { desc.paragraphs.map((paragraph, index) => (
                <p dangerouslySetInnerHTML={{ __html: paragraph }} key={"" + index} />
            ))}
            <hr className="my-4"/>
            <p>{ desc.footer_paragraph }</p>
        </div>
    )
}