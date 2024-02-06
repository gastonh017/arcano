'use client'
import Link from "next/link";
import styles from '@/app/navbar.module.css'
import { useState } from 'react';
import Images from 'next/image'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <li> 
            <Link className={styles.link} href="/marco">Marco</Link>
      </li>
      <Images
          onClick={ () => {
            console.log("onclickkkkkk!!!")
            setIsOpen(!isOpen);
          }} 
          className={styles.dropdownbtn}
          src='/images/svg/arrow-navBar.svg'
          width={25}
          height={25}
          alt='logo'
          
        />
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
