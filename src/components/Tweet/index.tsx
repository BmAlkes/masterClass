import React from "react";

interface TweetProps {
  user: string;
  content?: string;
  children?: string;
}

const Tweet = ({ content, user }: TweetProps) => {
  return (
    <div>
      <span>{user}</span>
      <p>{content}</p>
      Tweet
      <button>like</button>
    </div>
  );
};

export default Tweet;
