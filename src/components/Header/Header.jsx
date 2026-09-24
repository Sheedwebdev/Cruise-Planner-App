import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.container}>
      <h1>Cruise Travel App</h1>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/cruise-details">Cruise Details</Link>
        <Link to="/flight-stay">Flight & Stay</Link>
        <Link to="/trip-summary">Trip Summary</Link>
      </nav>
    </header>
  );
}

export default Header;
