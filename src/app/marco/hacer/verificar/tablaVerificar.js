"use client"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Lienzo from '../lienzo'

const lienzosVerificar = [
  {
    title: "Rubrica de Madurez",
    description: "Realizar rúbrica de madurez.",
    src: "/images/lienzos/03-verificar/rubricaMadurez01.png",
    name: "Rubrica de Madurez.png",
    href: "/images/lienzos/03-verificar/rubricaMadurez01.png",
    color: "#ec4e70",
  },
  {
    title: "Radiadores de Informacion",
    description: "Realizar matriz de radiadores de información",
    src: "/images/lienzos/03-verificar/lienzoRadiadores01.png",
    name: "Radiadores de Informacion.png",
    href: "/images/lienzos/03-verificar/lienzoRadiadores01.png",
    color: "#ec4e70",
  },
  {
    title: "Lienzo de facilitación de Taller de Mejora Continua",
    description: "Lienzo de radiadores de información",
    src: "/images/lienzos/03-verificar/lienzoMejoraContinua01.png",
    name: "Lienzo de Facilitacion de Mejora.png",
    href: "/images/lienzos/03-verificar/lienzoMejoraContinua01.png",
    color: "#ec4e70",
  }
]

function TablaVerificar() {

  return (
    <Table striped bordered responsive>
      <thead>
        <tr>
          <th style={{ width: '30%' }} >Objetivos</th>
          <th style={{ width: '30%' }} >Entregable</th>
          <th style={{ width: '40%' }} >Prácticas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ backgroundColor: "#f6e0e0" }} >Realizar Rúbrica de Madurez</td>
          <td style={{ backgroundColor: "#f6e0e0" }} >Nivel de madurez en el desarrollo de habilidades</td>
          <td style={{ backgroundColor: "#f6e0e0" }} >
            < Lienzo data={lienzosVerificar[0]} />
          </td>
        </tr>
        <tr>
          <td>Realizar Matriz de Radiadores de Información</td>
          <td>Radiadores de Información actualizados</td>
          <td>< Lienzo data={lienzosVerificar[1]} /></td>
        </tr>
        <tr>
          <td style={{ backgroundColor: "#f6e0e0" }} >Realizar Eventos de Mejora Continua</td>
          <td style={{ backgroundColor: "#f6e0e0" }} >Iniciativas de mejoras priorizadas</td>
          <td style={{ backgroundColor: "#f6e0e0" }} >< Lienzo data={lienzosVerificar[2]} /></td>
        </tr>

      </tbody>
    </Table>
  );
}

export default TablaVerificar;