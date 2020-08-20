import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header">
        <Link to="/anonymousVotingBooth">
          <p class="logo">Poll it Together</p>
        </Link>
        <Link to="/createpoll">Create a Poll</Link>
      </div>
    </header>
  );
};

export default Header;
