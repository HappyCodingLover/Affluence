// Import Custom Component

// Import Settings

export default function VideoBanner() {
    return (
        <section className="banner-video-section banner-h-80">
            <video src="https://d2ybmb80bbm9ts.cloudfront.net/mN/q2/Qmd3868V6a9pwjUyuUaqPHg5wnSX8H9pDtLU45coSrmNq2/nft_q4.mp4" className="w-100 h-100" 
                autoPlay={ true } 
                loop={ true }
                muted= { true }
                playsInline={ true }>
            </video>
        </section>
    );
}