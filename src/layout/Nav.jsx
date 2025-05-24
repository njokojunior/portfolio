import Logo from "./../components/Logo";
import Menu from "../components/Menu";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <Menu />
    </nav>
  );
}

export default Nav;
