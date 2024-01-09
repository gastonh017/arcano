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
         Marco 
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <li><Link href="/marco/protagonistas" > Protagonistas</Link></li>
              <li><Link href="/marco/dominios" > Dominios</Link></li>
              <li><Link href="/marco/hacer" > Hacer</Link></li>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
