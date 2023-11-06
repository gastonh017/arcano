import Link from "next/link";
import styles from "./navbar.module.css"
import Image from 'next/image'

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
    route: "/register",
  },
];
export function NavBar() {
  return (
    <header className= {styles.header}>
      <nav className={styles.nav}>
        <Image src="/images/logo arcano.png" width={114} height={33} alt="logo"></Image>
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
