import React from "react";
import "./styles.css";
import { Sparkle } from "phosphor-react";

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="timeline-header">
      {props.title}
      <Sparkle />
    </div>
  );
};

export default Header;
