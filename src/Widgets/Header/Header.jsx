import styles from "./Header.module.css";
import logo from "../../assets/netflixlogo.png";
function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={logo} alt="logo" className={styles.logo} />
    </header>
  );
}

export default Header;