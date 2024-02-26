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
    color: "#ec4e70",
  },
  {
    title: "Radiadores de Informacion",
    src: "/images/lienzos/lienzoRadiadores.png",
    name: "Radiadores de Informacion.png",
    href: "/images/lienzos/lienzoRadiadores.png",
    color: "#ec4e70",
  },
  {
    title: "Lienzo de facilitación de Taller de Mejora Continua",
    src: "/images/lienzos/lienzoFacilitacionMejora.png",
    name: "Lienzo de Facilitacion de Mejora.png",
    href: "/images/lienzos/lienzoFacilitacionMejora.png",
    color: "#ec4e70",
  }
]

function TablaVerificar() {

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
          <td>Realizar Rúbrica de Madurez</td>
          <td style={{backgroundColor:"#f6e0e0"}} >Nivel de madurez en el desarrollo de habilidades</td>
          <td style={{backgroundColor:"#f6e0e0"}} >
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
          <td style={{backgroundColor:"#f6e0e0"}} >Iniciativas de mejoras priorizadas</td>
          <td style={{backgroundColor:"#f6e0e0"}} >< Lienzo data={lienzosVerificar[2]} /></td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default TablaVerificar;