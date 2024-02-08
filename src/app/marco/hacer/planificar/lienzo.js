"use client"

import { useState } from 'react';
import Image from 'next/image';
import LienzoModal from './lienzoModal'
import styles from './page.module.css'

function LienzoValores({ data }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  console.log('data en lienzo:', data);
  return (
    <div>
      <div className={styles.lienzContainer}>
        <p>{data.title}</p>
        <button onClick={() => setShow(true)} className={styles.btn} >
          <Image src="/images/svg/acceder_lienzos.png" width={15} height={15} alt="acceder" >
          </Image>
        </button>
      </div>
      <LienzoModal handleClose={handleClose} show={show} dataLienzo={data} />
    </div>
  );
}

export default LienzoValores;