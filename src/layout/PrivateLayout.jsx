// import { Outlet } from "react-router-dom";

import { Outlet } from "react-router-dom";
import PrivateNavbar from "../components/header/PrivateNavbar";

const PrivateLayout = () => {
    return (
        <div className="w-[1300px] m-auto">
            <PrivateNavbar />
            <main className="border-t border-metal-200 pt-[14px]">
                <Outlet />
            </main>
        </div>
    );
};

export default PrivateLayout;
