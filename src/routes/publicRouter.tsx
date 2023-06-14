import { createBrowserRouter, RouteObject } from "react-router-dom";
import { PublicLayout } from "components";

const publicRoutes: RouteObject[] = [
    {
        path: "/",
        element: <PublicLayout/>
    }
];

export const publicRouter = createBrowserRouter(publicRoutes)