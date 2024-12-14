

import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import CSHeader from "../components/header/CSHeader";

const PrivateLayout = () => {
    return (
        <div className="w-[1300px] m-auto">
            <CSHeader />
            <main className="border-t border-metal-200 pt-[14px] h-[calc(100vh-120px)]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PrivateLayout;
