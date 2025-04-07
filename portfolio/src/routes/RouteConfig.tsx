import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages";
import Homepage from "../pages/homepage";
import AboutPage from "../pages/aboutpage";
import WorkPage from "../pages/workspage";
import ContactPage from "../pages/contactpage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {index: true, element: <Homepage/>},
            {path: "/about", element: <AboutPage/>},
            {path: "/work", element: <WorkPage/>},
            {path: "/contact", element: <ContactPage/>},
        ],
        errorElement: <div>404</div>,
    }
]);

export default function RouteConfig(){return<RouterProvider router={router} />}