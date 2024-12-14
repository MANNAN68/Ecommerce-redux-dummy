import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import CSHeader from "../components/header/CSHeader";

const PublicLayout = () => {
    return (
        <div className="w-[80%] m-auto">
            <CSHeader />
            <main className="border-t border-metal-200 pt-[14px] ">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
