import Link from "next/link";
import Images from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Logout from "@/components/logout";
import styles from "./navbar.module.css";

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
];

const authPages = [
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
];
export async function NavBar() {
  const logoSize = 24;
  const session = await getServerSession(authOptions);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Images src="/images/logo arcano.png" width={114} height={33} alt="logo"></Images>
        <ul className={styles.ul}>
          {pages.map(({ label, route }) => (
            <li key={route}>
              <Link className={styles.link} href={route}>
                {label}
              </Link>
            </li>
          ))}

          {session && session.user ? (
            <>
              <li className={styles.logoUser}>
                <Link href={`/auth/user`} className={styles.avatarContainer}>
                  <Images
                    src={session.user.image}
                    width={logoSize}
                    height={logoSize}
                    alt="logo"
                    className={styles.avatar}
                  />
                  <span className={styles.link}>Hola {session.user.name}</span>
                </Link>
              </li>
              <li>
                <Logout />
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/auth/register" className={styles.link}>
                  Registrarse{" "}
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className={styles.link}>
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
