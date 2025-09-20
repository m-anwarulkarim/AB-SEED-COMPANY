import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Error from "@/pages/Error";
import Home from "@/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
        index: true,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
