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

import twitter from "../../assets/Vector.svg";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={twitter} alt="" className="logo" />
      <nav className="main-navigation">
        <a href="">
          <House weight="fill" className="active" />
          Home
        </a>
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
