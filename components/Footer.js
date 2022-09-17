import style from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h5>
        Copyright © 2022 ReddyCodesign - All Rights Reserved.
        </h5>
      </div>
    </div>
  );
};

export default Footer;
