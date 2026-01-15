import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AppsDetails from "../Components/AppsDetails/AppsDetails";
import AppErrorPage from "../Pages/AppErrorPage/AppErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: '/',
            Component: Home
        },
        {
            path: '/apps',
            loader: () => fetch('/apps.json'),
            Component: Apps
        },
        {
            path: '/installation',
            loader: () => fetch('/apps.json'),
            Component: Installation
        },
        {
            path: '/apps/:id',
            loader: () => fetch('/apps.json'),
            errorElement: <AppErrorPage></AppErrorPage>,
            Component: AppsDetails
        },
        { path: "*", Component: ErrorPage },
    ],
  },
]);
