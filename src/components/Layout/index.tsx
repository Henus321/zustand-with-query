import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
    return (
        <div className="flex flex-col">
            <Header />

            <div className="flex flex-col p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
