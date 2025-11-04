import { createBrowserRouter } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage,
                loader: () => fetch("/trending-apps.json"),
            },
            {
                path: "*",
                Component: ErrorPage,
            }
        ]
    }
]);

export default router;
