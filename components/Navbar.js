import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.logo}> <Link href="/">ReddyCODESIGN </Link></div>
     
      <div>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="#home">Home</Link>
        </li>
        <li className={style.listItem}>
        <Link href="#about">About</Link>
        </li>
        <li className={style.listItem}>
          <Link href="#skills">Skills & Tools</Link>
        </li>
        <li className={style.listItem}>
        <Link href="#mywork">My Work</Link>
        </li>
        {/* <li className={style.listItem}>
          <Link href="#contact">Contact</Link>
        </li> */}
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={style.menuItem}>
          <Link href="#home">Home</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="#about">About</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="#skills">Skills & Tools</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="#mywork">My Work</Link>
        </li>
        {/* <li className={style.menuItem}>
          <Link href="#contact">CONTACT</Link>
        </li> */}
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
