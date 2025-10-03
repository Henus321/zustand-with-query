import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
    return (
        <div className="flex flex-col">
            <Header />

            <h1>Layout</h1>

            <Outlet />
        </div>
    );
};

export default Layout;
