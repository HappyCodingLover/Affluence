// Import Custom Component

// Import Settings

export default function VideoBanner( { video } ) {
    return (
        <section className="banner-section banner-video-section banner-h-80">
            <video src={ video } className="w-100 h-100" 
                autoPlay={ true } 
                loop={ true }
                muted= { true }
                playsInline={ true }>
            </video>
        </section>
    );
}