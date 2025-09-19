import { createBrowserRouter } from "react-router";
import MainLayout from "../component/layout/MainLayout";
import Error from "@/pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
