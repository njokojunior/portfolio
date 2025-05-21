import Logo from "./Logo";
import Menu from "./Menu";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Menu />
    </nav>
  );
}

export default Nav;
