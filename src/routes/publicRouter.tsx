import { createBrowserRouter, RouteObject } from "react-router-dom";
import { PublicLayout } from "components";
import { AboutPage, ContactPage, ErrorPage, HomePage, ProductsPage } from "pages";

const publicRoutes: RouteObject[] = [
    {
        path: "/",
        element: <PublicLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/products",
                element: <ProductsPage/>
            },
            {
                path: "/about",
                element: <AboutPage/>
            },
            {
                path: "/contact",
                element: <ContactPage/>
            },
        ]
    },

];

export const publicRouter = createBrowserRouter(publicRoutes)