import Link from "next/link";
import Images from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Logout from "@/components/logout";
import styles from "./navbar.module.css";
import Dropdown from "@/components/NavBar2/NavBarItems";

const pages = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Nosotros",
    route: "/nosotros",
  },
  {
    label: "Marco",
    route: "/marco",
  },
  {
    label: "Protagonistas",
    route: "/marco/protagonistas",
  },
  {
    label: "Dominios",
    route: "/marco/dominios",
  },
  {
    label: "Hacer",
    route: "/marco/hacer",
  },
];

const authPages = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Nosotros",
    route: "/nosotros",
  },
  {
    label: "Marco",
    route: "/marco",
  },
  {
    label: "Protagonistas",
    route: "/marco/protagonistas",
  },
  {
    label: "Dominios",
    route: "/marco/dominios",
  },
  {
    label: "Hacer",
    route: "/marco/hacer",
  },
];
export async function NavBar() {
  const logoSize = 24;
  const session = await getServerSession(authOptions);

  return (
    <header className={styles.header}>
      <div className={styles.navBar}>
        <Images src="/images/logo arcano.png" width={114} height={33} alt="logo"></Images>
        <ul className={styles.ul}>
          <li> 
            <Link className={styles.link} href="/">Home</Link>
          </li>
          <li> 
            <Link className={styles.link} href="/nosotros">Nosotros</Link>
          </li>
          <Dropdown />

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
     
      </div>
    </header>
  );
}
