import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from "./Layout"
import LandingPage from "./LandingPage"
import About from "./About"

function AllComponents() {
    const location = useLocation()

    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path='/about' element={<About />} />
                </Route>
            </Routes>
        </>
    );
}

export default AllComponents;