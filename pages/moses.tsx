// Import Custom Component
import VideoBanner from "../components/partials/moses/video-banner";
import Assembly from "../components/partials/moses/assembly";

function Moses () {
    return (
        <>
            <main className="main">
                <div className="container-fluid mb-1">
                    <VideoBanner />
                    
                    <Assembly />
                </div>
            </main>
        </>
    )
}

export default Moses;