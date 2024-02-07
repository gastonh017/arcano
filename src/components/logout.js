'use client'
import { signOut } from 'next-auth/react';
import { getProviders } from "next-auth/react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import styles from '../app/navbar.module.css'

export default function LogOut() {
  const providers = getProviders()

  return (
    <button
      onClick={() => signOut()}
      className={styles.logout}
    >
      <div>
        <FaArrowRightFromBracket style={{ fontSize: '.8rem', margin: '.3rem' }} />
        <p className={styles.nameButton}>Salir</p>
      </div>
    </button>
  )
}