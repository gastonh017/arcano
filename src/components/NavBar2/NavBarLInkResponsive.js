'use client'
import Link from "next/link";
import { useState , useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import Dropdown from "@/components/NavBar2/NavBarItems";
import styles from '@/app/navbar.module.css'

const NavBarLinkResponsive = () => {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(1200);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    let width = window.innerWidth
    setScreenSize(width);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function handleResize() {
    const width = window
    if (width.innerWidth >= 768) {
      setMenuMobileOpen(true);
    } else {
      if (menuMobileOpen) setMenuMobileOpen(false);
    };
  };

  useEffect(() => {
    handleResize();
  },[])

  return (
    <>
      <div className={styles.mobileMode}>
        <button onClick={() => { menuMobileOpen ? setMenuMobileOpen(false) : setMenuMobileOpen(true) }}>
          <FaBars style={{color:'#222', cursor:'pointer'}} />
        </button>
      </div>
      <div className={menuMobileOpen ? styles.linksContainer : styles.linksContainerClose}>
        <ul className={styles.ul}>
          <li>
            <Link className={styles.link} href="/">Home</Link>
          </li>
          <li>
            <Link className={styles.link} href="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Dropdown />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBarLinkResponsive;
