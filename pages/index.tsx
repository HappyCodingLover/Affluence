// Import Custom Component
import FeaturedCollection from "../components/partials/home/featured-collection";
import IntroSection from "../components/partials/home/home-slidebanner";
import SpecialCollection from "../components/partials/home/special-collection";
import TopCollection from "../components/partials/home/top-collection";
import LiveCollection from "../components/partials/home/live-collection";
import HotCollection from "../components/partials/home/hot-collection";
import SpecialCollectionTwo from "../components/partials/home/special-collection-two";

function Home () {
    return (
        <>
            <main className="main">
                <div className="container-fluid mb-1">
                    <IntroSection />

                    <TopCollection />

                    <FeaturedCollection />

                    <SpecialCollection />

                    <LiveCollection />

                    <HotCollection />

                    <div className="divider mb-4 mt-3"></div>

                    <SpecialCollectionTwo />
                </div>
            </main>
        </>
    )
}

export default Home;