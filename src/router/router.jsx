import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import About from "../Pages/About";
import Product from "../Pages/Product";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Root />,
        children:[
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/service",
                element: <Service />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/product",
                element: <Product />,
            }
        ]
    }
])
export default router;