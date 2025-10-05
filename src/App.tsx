import Layout from "./components/Layout";
import Recipes from "./pages/Recipes";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./config";

function App() {
    return (
        <Routes>
            <Route path={ROUTES.home.href} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={ROUTES.recipes.href} element={<Recipes />} />
            </Route>
        </Routes>
    );
}

export default App;
