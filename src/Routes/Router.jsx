import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AllApps from "../Pages/Home/AllApps";
import Home from "../Pages/Home/Home";
import AppDetails from "../Pages/AppDeatils";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,

    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,

        element: <Home></Home>,
      },
      {
        path: "apps",
        element: <AllApps></AllApps>,
      },
      {
        path: "apps/:id",
        loader: async ({ params }) => {
          const res = await fetch("/Apps.json");
          const data = await res.json();
          return data.find((app) => app.id === Number(params.id));
        },
        element: <AppDetails />,
      },
    ],
  },
]);

export default router;
