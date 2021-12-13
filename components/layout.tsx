import { useRouter } from 'next/router';

import FrontendLayout from "./layouts/frontend";
import AuthLayout from "./layouts/auth";

function Layout({ children }) {
    const router = useRouter();    
    const pathname = router.pathname;

    let layout = "frontend";
    if (/^\/connect(|\/)$/.test(pathname)) layout = 'auth';

    return (
        <>
            {
                layout == "frontend" && (
                    <FrontendLayout children={ children } />
                )
            }

            {
                layout == "auth" && (
                    <AuthLayout children={ children } />
                )
            }
        </>
    )
}

export default Layout;