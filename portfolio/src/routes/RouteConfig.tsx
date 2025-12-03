import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages";
import Homepage from "../pages/homepage";
import AboutPage from "../pages/aboutpage";
import WorkPage from "../pages/workspage";
import ResumePage from "../pages/resumepage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {index: true, element: <Homepage/>},
            {path: "/about", element: <AboutPage/>},
            {path: "/work", element: <WorkPage/>},
            {path: "/resume", element: <ResumePage/>},
        ],
        errorElement: <div>404</div>,
    }
]);

export default function RouteConfig(){return<RouterProvider router={router} />}