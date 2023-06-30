import { createBrowserRouter, RouteObject } from "react-router-dom";
import { PublicLayout } from "components";
import {
    AboutPage,
    ContactPage,
    createProduct,
    deleteProduct,
    ErrorPage,
    getProductItem,
    getProducts,
    HomePage,
    ProductItemPage,
    ProductsPage,
    updateProduct
} from "pages";
import TestPage from "pages/TestPage";
import ProductCreatePage from "pages/ProductsPage/ProductCreatePage/ProductCreatePage";
import ProductEditPage from "pages/ProductsPage/ProductEditPage/ProductEditPage";
import ProductErrorPage from "pages/ProductsPage/ProductErrorPage/ProductErrorPage";
import ProductIndexPage from "pages/ProductsPage/ProductIndexPage/ProductIndexPage";

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
                children: [
                    {
                        errorElement: <ProductErrorPage/>,
                        children: [
                            {
                                index: true,
                                element: <ProductIndexPage/>,
                            },
                            {
                                path: "create",
                                element: <ProductCreatePage/>,
                                action: createProduct,
                            },
                            {
                                path: ":productId",
                                element: <ProductItemPage/>,
                                loader: getProductItem
                            },
                            {
                                path: ":productId/edit",
                                element: <ProductEditPage/>,
                                loader: getProductItem,
                                action: updateProduct
                            },
                            {
                                path: ":productId/delete",
                                action: deleteProduct,
                            }
                        ]
                    }
                ]
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