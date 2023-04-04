import React, { FormEvent, useEffect, useState } from "react";
import Header from "../components/Header";
import Separator from "../components/Separator";
import Tweet from "../components/Tweet";

const path = window.location.pathname;
console.log(path);

const Timeline = () => {
  const [tweets, setTweets] = useState([
    "Meu primeiro tweet",
    "teste",
    "deu certo",
  ]);
  const [newTweet, setNewTweet] = useState("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  };
  return (
    <main className="timeline">
      {path === "/" ? <Header title="Home" /> : <Header title="Tweet" />}

      <form className="new-tweet-form" onSubmit={handleFormSubmit}>
        <label htmlFor="tweet">
          <img src="https://github.com/BmAlkes.png" alt="bruno" />
          <textarea
            id="tweet"
            placeholder="whats happening"
            onChange={(e) => {
              setNewTweet(e.target.value);
            }}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Separator />
      {tweets.map((tweet) => {
        return <Tweet content={tweet} key={tweet} />;
      })}
    </main>
  );
};

export default Timeline;
