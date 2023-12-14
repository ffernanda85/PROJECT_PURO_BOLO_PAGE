import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homePage/HomePage"
import { ProductsPage } from "../pages/products/ProductsPage";
import { DetailsPage } from "../pages/detailsPage/DetailsPage";
import { AboutUsPage } from "../pages/aboutUsPage/AboutUsPage";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/products" element={<ProductsPage/>} />
                <Route path="/details" element={<DetailsPage/>} />
                <Route path="/about" element={<AboutUsPage/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}