import { Outlet, Link } from 'react-router-dom'

function Layout() {
    return (
        <>
            {/* Navbar */}
            <Link to={"/"}>Home</Link>
            <br />
            <Link to={"/about"}>About</Link>

            <Outlet />
            {/* Footer */}
        </>
    );
}

export default Layout;