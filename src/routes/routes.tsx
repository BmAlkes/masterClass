import { createBrowserRouter } from "react-router-dom";
import Timeline from "../pages/Timeline";
import Tweet from "../pages/Tweet";
import Status from "../pages/Tweet";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Timeline />,
  },
  {
    path: "/tweet",
    element: <Status />,
  },
]);
