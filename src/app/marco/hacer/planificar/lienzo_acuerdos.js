"use client"

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import lienzo0 from '../../../../../public/images/svg/lienzos/LienzoAcuerdos.png'
import lienzo from 'public/images/lienzos/lienzoAcuerdos.png'

function LienzoValores({handleClose, show}) {
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
          <Modal.Title>Lienzo de Acuerdos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={lienzo} width={775} height={550} alt='lienzo de acuerdos'></Image>
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={handleClose}>
            Close
          </Button>
           <a href="./public/images/svg/lienzos/LienzoValores.png" download="LienzoValores.png">
                  <i>
                  <Button>Descargar</Button>
                  </i>
                </a> 
        </Modal.Footer>
    </Modal>
    </>
  );
}

export default LienzoValores;