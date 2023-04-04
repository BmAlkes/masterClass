import React from "react";
import Header from "../components/Header";
import Separator from "../components/Separator";
import Tweet from "../components/Tweet";

const path = window.location.pathname;
console.log(path);

const Timeline = () => {
  return (
    <main className="timeline">
      {path === "/" ? <Header title="Home" /> : <Header title="Tweet" />}

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
  );
};

export default Timeline;
