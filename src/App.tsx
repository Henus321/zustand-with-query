import Layout from "./components/Layout";
import Posts from "./pages/Posts";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./config";

function App() {
    return (
        <Routes>
            <Route path={ROUTES.home.href} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={ROUTES.posts.href} element={<Posts />} />
            </Route>
        </Routes>
    );
}

export default App;
