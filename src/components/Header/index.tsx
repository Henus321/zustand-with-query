import { ROUTES } from "@/config";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <ul className="flex mr-  gap-2 bg-">
                    {Object.values(ROUTES).map((route) => (
                        <li key={route.href}>
                            <Link to={route.href}>{route.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Header;
