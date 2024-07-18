import React from 'react'
import styles from "./Nav.module.css"
function Nav() {
  return (
    <nav className={`${styles.navigation} container`}>
      <img src="images/logo.png" alt="" />
      <ul >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Nav