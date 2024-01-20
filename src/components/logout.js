'use client'
import { signOut } from 'next-auth/react';
import { getProviders } from "next-auth/react";
import { FaArrowRight } from "react-icons/fa";
import styles from '../app/navbar.module.css'

export default function LogOut() {
  const providers = getProviders()

  return (
    <button
      onClick={() => signOut()}
      className={styles.logout}
    > {'['}
      <FaArrowRight  style={{fontSize:'.5rem',margin:'.1rem .25rem 0 0'}}/>
    </button>
  )
}