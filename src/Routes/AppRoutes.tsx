import { BrowserRouter as Router, Route, Routes, Navigate, redirect } from "react-router-dom";
import { Cart } from "../Pages/Cart/Cart";
import { ComicDetails } from "../Pages/ComicsDetails/Comic/ComicDetails";
import { Home } from "../Pages/Home/Home";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/ComicDetails/:id" element={<ComicDetails />} />
                <Route path="/Cart" element={<Cart />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes