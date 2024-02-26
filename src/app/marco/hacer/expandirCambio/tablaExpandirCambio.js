"use client"

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Lienzo from '../lienzo'

const lienzos = [
  {
    title: "Lienzo para facilitar el evento de mejora continua",
    src: "/images/lienzos/lienzoMejoraContinua.png",
    name: "Lienzo para facilitar el evento de mejora continua.png",
    href: "/images/lienzos/lienzoMejoraContinua.png",
    color: "#00b0f0",
  },
  {
    title: "Mural de kudos de reconocimientos",
    src: "/images/lienzos/muralDeKudos.png",
    name: "Mural de kudos de reconocimientos.png",
    href: "/images/lienzos/muralDeKudos.png",
    color: "#00b0f0",
  },
  {
    title: "Lienzo para el mapeo de acciones",
    src: "/images/lienzos/lienzoMapeoAcciones.png",
    name: "Lienzo para el mapeo de acciones.png",
    href: "/images/lienzos/lienzoMapeoAcciones.png",
    color: "#00b0f0",
  }
]

export default function TablaExpandirCambio() {

  return (
    <Table className="striped bordered responsive size='xl' ">
      <thead>
        <tr>
        <th style={{ width: '30%' }} >Objetivos</th>
          <th style={{ width: '30%' }} >Entregable</th>
          <th>Prácticas</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>Identificar las mejoras para la siguiente iteración </td>
          <td style={{backgroundColor:"#c9e9f4"}} >Nuevas ideas que se colocan en el lienzo de visualización del trabajo </td>
          <td style={{backgroundColor:"#c9e9f4"}} >< Lienzo data={lienzos[0]} /></td>
        </tr>
        <tr>
          <td>Reconocimientos a colegas, equipos y estudiantes  </td>
          <td>Reconocimientos  </td>
          <td>< Lienzo data={lienzos[1]} /></td>
        </tr>
        <tr>
          <td>Realizar una hoja de ruta de mantenimiento en caso de no continuar con la implementación</td>
          <td style={{backgroundColor:"#c9e9f4"}} >Nueva hoja de ruta de mantenimiento  </td>
          <td style={{backgroundColor:"#c9e9f4"}} >< Lienzo data={lienzos[2]} /></td>
        </tr>

      </tbody>
    </Table>
  );
};