import Link from "next/link";
import Images from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Logout from "@/components/logout";
import NavBarLinkResponsive from "@/components/NavBar2/NavBarLInkResponsive";
import { FaAddressBook, FaUser } from "react-icons/fa6";
import styles from "./navbar.module.css";

// const pages = [
//   {
//     label: "Home",
//     route: "/",
//   },
//   {
//     label: "Nosotros",
//     route: "/nosotros",
//   },
//   {
//     label: "Marco",
//     route: "/marco",
//   },
//   {
//     label: "Protagonistas",
//     route: "/marco/protagonistas",
//   },
//   {
//     label: "Dominios",
//     route: "/marco/dominios",
//   },
//   {
//     label: "Hacer",
//     route: "/marco/hacer",
//   },
// ];

// const authPages = [
//   {
//     label: "Home",
//     route: "/",
//   },
//   {
//     label: "Nosotros",
//     route: "/nosotros",
//   },
//   {
//     label: "Marco",
//     route: "/marco",
//   },
//   {
//     label: "Protagonistas",
//     route: "/marco/protagonistas",
//   },
//   {
//     label: "Dominios",
//     route: "/marco/dominios",
//   },
//   {
//     label: "Hacer",
//     route: "/marco/hacer",
//   },
// ];

export async function NavBar() {
  const logoSize = 33;
  const session = await getServerSession(authOptions);

  return (
    <header className={styles.header}>
      <section className={styles.navbarContainer}>
        <article className={styles.navbar}>
          <div className={styles.logo}>
            <Images
              src="/images/logo arcano.png"
              width={130}
              height={40}
              alt="logo"
              className={styles.brandLogo}
            ></Images>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <NavBarLinkResponsive />
          </div>

        </article>
        <article>
          <ul className={styles.ulUser}>
            {session && session.user ? (
              <>
                <li>
                  <Link href={`/auth/user`} className={styles.avatarContainer}>
                    <Images
                      src={session.user.image}
                      width={logoSize}
                      height={logoSize}
                      alt="logo"
                      className={styles.avatar}
                    />
                    <p className={styles.link}>Hola {session.user.name}</p>
                  </Link>
                </li>
                <li>
                  <Logout />
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/auth/register" className={styles.register}>
                    <div>
                      <FaAddressBook style={{ fontSize: '.8rem', margin: '.3rem' }} />
                      <p className={styles.nameButton}>Registrarse</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/auth/login" className={styles.login}>
                    <div>
                      <FaUser style={{ fontSize: '.8rem', margin: '.3rem' }} />
                      <p className={styles.nameButton}>Ingresar</p>
                    </div>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </article>

      </section>
    </header>
  );
}
