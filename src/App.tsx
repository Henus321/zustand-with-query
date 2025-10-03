import Layout from "./components/Layout";
import Recipes from "./pages/Recipes";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Users from "./pages/Users";

import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./config";

function App() {
    return (
        <Routes>
            <Route path={ROUTES.home.href} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={ROUTES.recipes.href} element={<Recipes />} />
                <Route path={ROUTES.todos.href} element={<Todos />} />
                <Route path={ROUTES.users.href} element={<Users />} />
            </Route>
        </Routes>
    );
}

export default App;
