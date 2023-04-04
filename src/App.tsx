import Tweet from "./components/Tweet";
import "./global.css";

import { Sparkle } from "phosphor-react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Separator from "./components/Separator";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <main className="timeline">
          <Header title="Home" />
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/BmAlkes.png" alt="bruno" />
              <textarea id="tweet" placeholder="whats happening" />
            </label>
            <button type="submit">Tweet</button>
          </form>
          <Separator />
          <Tweet content="Tweet 1" />
          <Tweet content="Tweet 2" />
          <Tweet content="Tweet 3" />
        </main>
      </div>
    </div>
  );
}

export default App;
