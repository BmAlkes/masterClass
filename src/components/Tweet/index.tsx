import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";
import React from "react";
import "./tweet.css";
import { Link } from "react-router-dom";
interface TweetProps {
  content: string;
}

const Tweet = (props: TweetProps) => {
  return (
    <Link to="/tweet" className="tweet">
      <img src="https://github.com/diego3g.png" alt="diego fernandes" />
      <div className="tweetContent">
        <div className="tweet-content-header">
          <strong>Diego Fernandes</strong>
          <span>@dieegosf</span>
        </div>
        <p>{props.content}</p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Tweet;
