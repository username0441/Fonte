import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from "./Layout"
import LandingPage from "./LandingPage"

function AllComponents() {
    const location = useLocation()

    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path='/' element={<LandingPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default AllComponents;