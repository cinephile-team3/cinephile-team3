import { createBrowserRouter } from "react-router";
import App from "../App";
import Contact from "../pages/Contact/Contact";
import Pricing from "../pages/Pricing/Pricing";

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



