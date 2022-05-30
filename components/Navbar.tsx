import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className={styles.navBar}>
      <Link href={"/"}>
        <h1 className={styles.logo}>
          Blog<span>Project.io</span>
        </h1>
      </Link>
      <ul
        className={
          click ? `${styles.topMenu} ${styles.active}` : styles.topMenu
        }
      >
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
      <div
        className={click ? `${styles.toggle} ${styles.active}` : styles.toggle}
        onClick={handleClick}
      ></div>
    </nav>
  );
}
