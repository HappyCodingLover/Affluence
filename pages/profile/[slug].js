// Import Custom Component
import VideoBanner from "../../components/partials/artwork/video-banner";
import Content from "../../components/partials/artwork/content";

function Profile () {
    return (
        <>
            <main className="main">
                <div className="container-fluid mb-1">
                    <VideoBanner />
                    
                    <Content />
                </div>
            </main>
        </>
    )
}

export default Profile;