import Layout from "./components/Layout";
import Albums from "./pages/Albums";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Users from "./pages/Users";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/albums" element={<Albums />} />
                <Route path="/todos" element={<Todos />} />
                <Route path="/users" element={<Users />} />
            </Route>
        </Routes>
    );
}

export default App;
