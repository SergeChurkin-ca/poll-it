import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header">
        <Link to="/" tabIndex="0">
          <p class="logo">Poll it Together</p>
        </Link>
        <Link to="/createpoll" class="createLink" tabIndex="0">
          Create a Poll
        </Link>
      </div>
    </header>
  );
};

export default Header;
