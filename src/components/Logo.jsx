import styles from "./Logo.module.css";

function Logo() {
  return (
    <a href="http://localhost:5173/" className={styles.logo}>
      <img
        src="/logo-white.png"
        alt="audescript logo"
        className={styles.logoImg}
      />

      <img
        src="src/assets/aude-profile.jpg"
        alt="young fair guy smilling"
        className={styles.me}
      />
    </a>
  );
}

export default Logo;
