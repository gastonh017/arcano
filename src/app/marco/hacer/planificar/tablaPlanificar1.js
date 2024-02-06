"use client"

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import LienzoValores from './lienzo_valores';
import LienzoAcuerdos from './lienzo_valores';
import { useState } from 'react';


function TablaPlanificar1() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  return (
    <Table className="striped bordered responsive size='xl' ">
      <thead>
        <tr>
          <th>Objetivo</th>
          <th>Entregable</th>
          <th>Práctica</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Socializar el contenido de la guia y realizar acuerdo de trabajo para su implementación</td>
          <td>Taller de Socialización y Acuerdos de Trabajo</td>
          <td>
            <ul>
                <li>Pautas para facilitar el taller de sensibilización</li>
                <li >Lienzo de Valores</li>
                <button onClick={handleShow}>
                <Image src="/images/svg/acceder_lienzos.png" width={20} height={20} alt="acceder" >
                </Image>
                </button>
                <LienzoValores handleClose={handleClose} show={show}/>
                <li>Lienzo de Acuerdos</li>
                <button onClick={handleShow}>
                <Image src="/images/svg/acceder_lienzos.png" width={20} height={20} alt="acceder" >
                </Image>
                </button>
                <LienzoAcuerdos handleClose={handleClose} show={show}/>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Identificar las Narrativas Culturales</td>
          <td>Narrativas y Relatos</td>
          <td>Lienzo de Narrativas Culturales</td>
        </tr>
        <tr>
          <td>Nivelacion de Habilidades en Calidad</td>
          <td>Taller de capacitación en Calidad</td>
          <td>Taller de capacitación </td>
        </tr>
        <tr>
          <td>Realizar un diagnostico y definir el desafio a trabajar</td>
          <td>Acuerdo sobre el desafio a trabajar</td>
          <td>Lienzo de descubrimiento de desafios </td>
        </tr>
        <tr>
          <td>Identificar Habilidades ciudadanas a desarrollar</td>
          <td>Habilidades ciudadanas a desarrollar</td>
          <td>Lienzo de Habilidades ciudadanas </td>
        </tr>
        <tr>
          <td>Mapear los procesos de Gestion Institucional</td>
          <td>Mapa de procesos e identificacion de la etapa del desafio</td>
          <td>Lienzo de Mapeo de Procesos </td>
        </tr>
        <tr>
          <td>Definir Objetivos y Resultados esperados</td>
          <td> Objetivos y Resultados esperados y experiencia formativa</td>
          <td> 
          <ul>
                <li>Lienzo de Objetivos y Resultados</li>
                <li>Lienzo de experiencias formativa</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Definir la hoja de ruta</td>
          <td>Plan de trabajo</td>
          <td>Lienzo de Mapeo de Acciones </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TablaPlanificar1;