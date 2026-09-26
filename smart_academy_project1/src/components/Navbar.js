import styles from "./Navbar.module.css";

export default function Navbar({ list }) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {list.map((item, index) => (
          <li key={index} className={styles.navItem}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}