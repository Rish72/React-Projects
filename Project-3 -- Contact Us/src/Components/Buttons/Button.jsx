import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import styles from "./Button.module.css"
function button() {
  return (
    <div className={styles.btn}>
        <button> <MdOutlineMessage size={25} /> VIA SUPPORT CHAT</button>
    </div>
  )
}

export default button