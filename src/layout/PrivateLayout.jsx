// import { Outlet } from "react-router-dom";

import { Outlet } from "react-router-dom";
import PrivateNavbar from "../components/header/PrivateNavbar";
import Footer from "../components/footer/Footer";

const PrivateLayout = () => {
    return (
        <div className="w-[1300px] m-auto">
            <PrivateNavbar />
            <main className="border-t border-metal-200 pt-[14px] h-[calc(100vh-120px)]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PrivateLayout;
