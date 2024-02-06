'use client'
import Link from "next/link";
import styles from '@/app/navbar.module.css'
import { useState , useEffect } from 'react';
import Images from 'next/image'

const Dropdown = ({ handleResize , pathname }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (isOpen) handleResize();
    setIsOpen(!isOpen);
  };

  useEffect(()=> {
    setIsOpen(false)
  },[pathname])

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Link className={styles.link} href="/marco"
          onClick={handleResize}>Marco</Link>
        <Images
          onClick={toggleDropdown}
          className={styles.dropdownbtn}
          src='/images/svg/arrow-navBar.svg'
          width={32}
          height={32}
          alt='logo'
        />
      </div>
      {isOpen && (
        <ul className={styles.dropdownContent}>
          <li><Link href="/marco/protagonistas" className={styles.link} onClick={() => toggleDropdown()}> Protagonistas</Link></li>
          <li><Link href="/marco/dominios" className={styles.link} onClick={() => toggleDropdown()}> Dominios</Link></li>
          <li><Link href="/marco/hacer" className={styles.link} onClick={() => { toggleDropdown(); return handleResize }}> Hacer</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
