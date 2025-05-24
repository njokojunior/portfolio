import styles from "./Logo.module.css";
import myImage from "./../assets/aude-profile.jpg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img
        src="/logo-white.png"
        alt="audescript logo"
        className={styles.logoImg}
      />

      <img src={myImage} alt="young fair guy smilling" className={styles.me} />
    </Link>
  );
}

export default Logo;
