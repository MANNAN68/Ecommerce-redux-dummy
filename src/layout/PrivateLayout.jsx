// import { Outlet } from "react-router-dom";

import { Outlet } from "react-router-dom";
import PrivateNavbar from "../components/header/PrivateNavbar";

const PrivateLayout = () => {
    return (
        <div>
            <PrivateNavbar />
            <main>
                <Outlet /> {/* Renders the child route */}
            </main>
        </div>
    );
};

export default PrivateLayout;
