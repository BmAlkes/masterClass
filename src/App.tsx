import Tweet from "./components/Tweet";
import "./global.css";

import { Sparkle } from "phosphor-react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Separator from "./components/Separator";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
