import { ROUTES } from "@/config";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const Header = () => {
    const location = useLocation();

    return (
        <div>
            <nav>
                <ul className="flex items-center justify-center gap-4 bg-sky-800 py-1">
                    {Object.values(ROUTES).map((route) => (
                        <li className="flex" key={route.href}>
                            <Link
                                className={classNames(
                                    "text-white p-2 hover:text-sky-300 border-b-2 border-solid",
                                    route.href === location.pathname &&
                                        "border-sky-300 !text-sky-300"
                                )}
                                to={route.href}
                            >
                                {route.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Header;
