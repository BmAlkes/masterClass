import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from "phosphor-react";
import "./styles.css";
import { Link, NavLink } from "react-router-dom";

import twitter from "../../assets/Vector.svg";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={twitter} alt="" className="logo" />
      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          Home
        </NavLink>
        <a href="">
          <Hash />
          Explore
        </a>
        <a href="">
          <Bell /> Notification
        </a>
        <a href="">
          <Envelope />
          Messages
        </a>
        <a href="">
          <BookmarkSimple />
          BookMarks
        </a>
        <a href="">
          <FileText />
          List
        </a>
        <a href="">
          <User />
          Profile
        </a>
        <a href="">
          <DotsThreeCircle />
          More
        </a>
      </nav>
      <button className="btn-tweet" type="button">
        tweet
      </button>
    </aside>
  );
};

export default Sidebar;
