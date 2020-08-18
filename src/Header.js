import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header">
        <h1>Poll it Together</h1>
        <Link to="/createpoll">Create a Poll</Link>
      </div>
    </header>
  );
};

export default Header;
