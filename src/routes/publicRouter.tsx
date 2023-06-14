import { createBrowserRouter, RouteObject } from "react-router-dom";
import { PublicLayout } from "components";
import { AboutPage, ContactPage, ErrorPage, HomePage, ProductsPage } from "pages";
import TestPage from "pages/TestPage";

const publicRoutes: RouteObject[] = [
    {
        path: "/",
        element: <PublicLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
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
                element: <ContactPage/>,
                children: [
                    {
                        path: "random",
                        element: <AboutPage/>,
                        children: [
                            {
                                path: "name",
                                element: <TestPage/>
                            },
                        ]
                    },
                ]
            },


        ]
    },

];

export const publicRouter = createBrowserRouter(publicRoutes)