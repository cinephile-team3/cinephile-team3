import { createBrowserRouter, Outlet } from "react-router";
import App from "../App";
import Contact from "../pages/Contact/Contact";
import Pricing from "../pages/Pricing/Pricing";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
)

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/contact", element: <Contact /> },
      { path: "/pricing", element: <Pricing /> },
    ]
  }
]);