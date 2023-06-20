import { createBrowserRouter, RouteObject } from "react-router-dom";
import { PublicLayout } from "components";
import {
    AboutPage,
    ContactPage,
    createProduct,
    ErrorPage,
    getProductItem,
    getProducts,
    HomePage,
    ProductItemPage,
    ProductsPage
} from "pages";
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
                path: "products",
                element: <ProductsPage/>,
                loader: getProducts,
                action: createProduct,
            },
            {
                path: "products/:productId",
                element: <ProductItemPage/>,
                loader: getProductItem
            },
            {
                path: "about",
                element: <AboutPage/>
            },
            {
                path: "contact",
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