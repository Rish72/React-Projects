import React from "react";

function Nav() {
  return (
    <nav>
      <img src="./public/images/brand_logo.png" alt="" />
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>

      <button className="login">Login</button>
    </nav>
  );
}

export default Nav;
