"use client"

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import BotonDescarga from '../BotonDescarga';

function LienzoAcuerdos({handleClose, show}) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

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
          <Image src='./images/svg/lienzos/lienzoacuerdos.png' />
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={handleClose}>
            Close
          </Button>
          <BotonDescarga fileName="lienzoacuerdos.png" />
          {/* <a href="./data/MuraccioleCV.pdf" download="Lienzo de Valores.pdf">
                  <i class="networks-icon">
                    <p class="network-text" hidden="" style="display: none;">descargar CV</p>
                  </i>
                </a> */}
        </Modal.Footer>
    </Modal>
    </>
  );
}

export default LienzoAcuerdos;