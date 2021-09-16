import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import KeyboardVoiceSharpIcon from "@material-ui/icons/KeyboardVoiceSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsNoneSharpIcon from "@material-ui/icons/NotificationsNoneSharp";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="Youtube Icon"
            className="header__logo"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          placeholder="Search"
          type="text"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <KeyboardVoiceSharpIcon className="header__icon" />
        <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsNoneSharpIcon className="header__icon" />
        <Avatar
          alt="Sai Krishna"
          src="https://avatars.githubusercontent.com/u/45930992?v=4x"
        />
      </div>
    </div>
  );
}

export default Header;
