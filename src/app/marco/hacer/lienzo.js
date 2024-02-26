"use client"

import { useState } from 'react';
import Image from 'next/image';
import LienzoModal from './lienzoModal'
import styles from './page.module.css'

function Lienzo({ data }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <div>
      <div className={styles.lienzContainer}>
        <p>{data.title}</p>
        <button onClick={() => setShow(true)} style={{backgroundColor:`${data.color}`}}  className={styles.btn} >
          <Image src="/images/svg/acceder_lienzos.png" width={12} height={12} alt="acceder" >
          </Image>
        </button>
      </div>
      <LienzoModal handleClose={handleClose} show={show} dataLienzo={data} />
    </div>
  );
}

export default Lienzo;