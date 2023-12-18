import Link from "next/link";
import styles from "./navbar.module.css"

const pages = [
  {
    label: "Home",
    route: "/",
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
  {
    label: "Registrarse",
    route: "/auth/register",
  },
];
export function NavBar() {
  return (
    <header className= {styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {pages.map(({ label, route }) => (
            <li key={route} >
              <Link className={styles.links} href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
