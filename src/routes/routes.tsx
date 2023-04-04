import { createBrowserRouter } from "react-router-dom";
import Timeline from "../pages/Timeline";
import Tweet from "../pages/Tweet";
import Status from "../pages/Tweet";
import { Layout } from "phosphor-react";
import Default from "../components/layouts/Default";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Timeline />,
      },
      {
        path: "/tweet",
        element: <Status />,
      },
    ],
  },
]);
