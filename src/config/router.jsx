import { createBrowserRouter } from "react-router";
import App from "../App";
import Contact from "../pages/Contact";
import Pricing from "../pages/Pricing";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/pricing",
        element: <Pricing />
    }
]);



