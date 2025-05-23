import styles from "./Logo.module.css";
import myImage from "./../assets/aude-profile.jpg";

function Logo() {
  return (
    <a href="http://localhost:5173/" className={styles.logo}>
      <img
        src="/logo-white.png"
        alt="audescript logo"
        className={styles.logoImg}
      />

      <img src={myImage} alt="young fair guy smilling" className={styles.me} />
    </a>
  );
}

export default Logo;
