import Link from "next/link";
import styles from "./navbar.module.css"

const pages = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Mision",
    route: "/mision",
  },
  {
    label: "Proposito",
    route: "/proposito",
  },
  {
    label: "Practicas",
    route: "/practicas",
  },
  {
    label: "Implementacion",
    route: "/implementacion",
  },
];
export function NavBar() {
  return (
    <header className= {styles.header}>
      <nav className={styles.nav}>
        <ul>
          {pages.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
