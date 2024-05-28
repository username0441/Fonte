import { Outlet, Link } from 'react-router-dom'
import Navbar from '../Navbar';

function Layout() {
    return (
        <>
            <Navbar />

            <Outlet />
            {/* Footer */}
        </>
    );
}

export default Layout;