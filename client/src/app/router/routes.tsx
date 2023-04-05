import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../features/home/homepage";
import Catalog from "../../features/catalog/catalog";
import ProductDetails from "../../features/catalog/productdetails";
import AboutPage from "../../features/about/aboutpage";
import ContactPage from "../../features/contact/contactpage";
import App from "../layout/App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {path: '', element: <HomePage></HomePage>},
            {path: 'catalog', element: <Catalog></Catalog>},
            {path: 'catalog/:id', element: <ProductDetails></ProductDetails>},
            {path: 'about', element: <AboutPage></AboutPage>},
            {path: 'contact', element: <ContactPage></ContactPage>}
        ]
    }
])

