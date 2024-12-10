import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/header/PublicNavbar";

const PublicLayout = () => {
    return (
        <div className="w-[1300px] m-auto">
            <PublicNavbar />
            <main className="border-t border-metal-200 pt-[14px]">
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    );
};

export default PublicLayout;
