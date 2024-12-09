import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/header/PublicNavbar";

const PublicLayout = () => {
    return (
        <div>
            <PublicNavbar />
            <main>
                <Outlet /> {/* Renders the child route */}
            </main>
            <footer>Footer</footer>
        </div>
    );
};

export default PublicLayout;
