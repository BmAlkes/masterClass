import React from "react";
import Header from "../components/Header";
import Separator from "../components/Separator";
import Tweet from "../components/Tweet";

const path = window.location.pathname;

const answers = ["concordo...", "faz sentido", "parabens pelo conteudo..."];

const Status = () => {
  return (
    <main className="timeline">
      {path === "/" ? <Header title="Home" /> : <Header title="Tweet" />}
      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni numquam excepturi odit distinctio illo, aliquam error earum facere iusto laboriosam eius dolore ut officia soluta dicta nemo, quidem voluptates." />
      <Separator />
      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/BmAlkes.png" alt="bruno" />
          <textarea id="tweet" placeholder="tweet your asnwer" />
        </label>
        <button type="submit">enter</button>
      </form>
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
};

export default Status;
