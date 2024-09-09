import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <nav className=" d-flex justify-content-center mt-4 mb-3">
                <ul className="d-flex list-unstyled">
                    <li className="me-3">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="me-3">
                        <Link to="/About">About</Link>
                    </li>
                    <li className="me-3">
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Error404">Erreur 404</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;