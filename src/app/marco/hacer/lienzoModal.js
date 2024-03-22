"use client"

import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import styles from './page.module.css'

function LienzoModal({ handleClose, show, dataLienzo }) {
  const data = Object(dataLienzo);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalWindow} style={{overflow: 'hidden'}}>
          {/* <p>{data.description}</p> */}
          <Image 
          src={data.src} 
          alt={data.title}
          width={750}
          height={850}  
          sizes='xlarge'
          // fill={true}       
          className={styles.modalWindow1} 
          fluid>

          </Image>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
          <a href={data.href} download={data.name}>
            <i>
              <Button>Descargar</Button>
            </i>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LienzoModal;