import { useRouter } from "next/router"

// Import Custom Component
import Banner from "../../components/partials/profile/banner";
import Content from "../../components/partials/profile/content";
import Collections from "../../components/partials/profile/collections";

import { getUser } from '../../utils';

function Profile () {
    const router = useRouter()
    const { query: { slug } } = router
    let user = getUser( slug )

    return (
        <>
            <Banner user={ user }/>

            <main className="main">
                <div className="container-fluid mb-1">
                    <Content user={ user }/>

                    <Collections user={ user.slug }/>
                </div>
            </main>
        </>
    )
}

export default Profile;