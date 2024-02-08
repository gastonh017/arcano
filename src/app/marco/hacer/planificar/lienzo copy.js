"use client"

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import lienzo from '../../../../../public/images/svg/lienzos/LienzoAcuerdos.png'

function LienzoValores({handleClose, show , data}) {

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
        <Modal.Body>
          <Image src={lienzo} width={775} height={550} alt='lienzo de valores'></Image>
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={handleClose}>
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

export default LienzoValores;