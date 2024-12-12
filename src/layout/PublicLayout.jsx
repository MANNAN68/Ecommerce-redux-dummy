import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/header/PublicNavbar";
import Footer from "../components/footer/Footer";

const PublicLayout = () => {
    return (
        <div className="w-[1300px] m-auto">
            <PublicNavbar />
            <main className="border-t border-metal-200 pt-[14px] h-[calc(100vh-120px)]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
