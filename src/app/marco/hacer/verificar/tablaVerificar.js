"use client"

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Lienzo from '../lienzo'

const lienzosVerificar = [
  {
    title: "Rubrica de Madurez",
    src: "/images/lienzos/rubricaMadurez.png",
    name: "Rubrica de Madurez.png",
    href: "/images/lienzos/rubricaMadurez.png",
  },
  {
    title: "Radiadores de Informacion",
    src: "/images/lienzos/lienzoRadiadores.png",
    name: "Radiadores de Informacion.png",
    href: "/images/lienzos/lienzoRadiadores.png",
  },
  {
    title: "Lienzo de facilitación de Taller de Mejora Continua",
    src: "/images/lienzos/lienzoFacilitacionMejora.png",
    name: "Lienzo de Facilitacion de Mejora.png",
    href: "/images/lienzos/lienzoFacilitacionMejora.png",
  }
]


function TablaVerificar() {

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
          <td>Realizar Rúbrica de Madurez</td>
          <td>Nivel de madurez en el desarrollo de habilidades</td>
          <td>
            < Lienzo data={lienzosVerificar[0]} />
          </td>
        </tr>
        <tr>
          <td>Realizar Matriz de Radiadores de Información</td>
          <td>Radiadores de Información actualizados</td>
          <td>< Lienzo data={lienzosVerificar[1]} /></td>
        </tr>
        <tr>
          <td>Realizar Eventos de Mejora Continua</td>
          <td>Iniciativas de mejoras priorizadas</td>
          <td>< Lienzo data={lienzosVerificar[2]} /></td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default TablaVerificar;