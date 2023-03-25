import { BrowserRouter as Router, Route, Routes, Navigate, redirect } from "react-router-dom";
import { RedirectFunction } from 'react-router-dom';
import { ComicCart } from "../Pages/Cart/Comic/ComicCart";
import { Home } from "../Pages/Home/Home";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/ComicCart/:id" element={<ComicCart />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes