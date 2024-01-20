'use client'
import Link from "next/link";
import styles from '@/app/navbar.module.css'
import { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button onMouseOver={toggleDropdown} className={styles.dropdownbtn}>
        <p className={styles.Link}>Marco</p>
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <li><Link href="/marco/protagonistas" className={styles.link} > Protagonistas</Link></li>
          <li><Link href="/marco/dominios" className={styles.link}> Dominios</Link></li>
          <li><Link href="/marco/hacer" className={styles.link}> Hacer</Link></li>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
