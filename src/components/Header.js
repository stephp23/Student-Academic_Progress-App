import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav">
      <header className="nav ul">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/groupbygrade">
          <li>Students by Grade Levels</li>
        </Link>
        <Link to="/lowestaverages">
          <li>Lowest Averages by Grade Level</li>
        </Link>
      </header>
    </div>
  )
}

export default Header
