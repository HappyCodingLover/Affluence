import { useRouter } from "next/router"

// Import Custom Component
import VideoBanner from "../../components/partials/artwork/video-banner";
import Content from "../../components/partials/artwork/content";

import { getArtwork } from '../../utils';

function Slug () {
    const router = useRouter()
    const { query: { slug } } = router
    let artwork = getArtwork( slug )

    return (
        <>
            <VideoBanner video={ artwork.video }/>

            <main className="main">
                <div className="container-fluid mb-1">
                    <Content artwork={ artwork }/>
                </div>
            </main>
        </>
    )
}

export default Slug;