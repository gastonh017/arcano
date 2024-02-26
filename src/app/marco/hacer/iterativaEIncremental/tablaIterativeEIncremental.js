"use client"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Lienzo from '../lienzo'

const lienzos = [
  {
    title: "Lienzo de visualización del trabajo",
    src: "/images/lienzos/lienzoVisualizacionDelTrabajo.png",
    name: "Lienzo de visualización del trabajo.png",
    href: "/images/lienzos/lienzoVisualizacionDelTrabajo.png",
    color: "#794dff",
  },
  {
    title: "Lienzo para facilitar la retrospectiva",
    src: "/images/lienzos/lienzoFacilitarRetrospectiva.png",
    name: "Lienzo para facilitar la retrospectiva.png",
    href: "/images/lienzos/lienzoFacilitarRetrospectiva.png",
    color: "#794dff",
  },
  {
    title: "Lienzo para la implementación de 5S (a)",
    src: "/images/lienzos/lienzoimplementacion5Sa.png",
    name: "Lienzo para la implementación de 5S (a).png",
    href: "/images/lienzos/lienzoimplementacion5Sa.png",
    color: "#794dff",
  },
  {
    title: "Lienzo para realizar el inventario y clasificar los objetos 5S (b)",
    src: "/images/lienzos/lienzoimplementacion5Sb.png",
    name: "Lienzo para realizar el inventario y clasificar los objetos 5S (b).png",
    href: "/images/lienzos/lienzoimplementacion5Sb.png",
    color: "#794dff",
  },
  {
    title: "Lienzo para la creación del cronograma de limpieza 5S (c)",
    src: "/images/lienzos/lienzoimplementacion5Sc.png",
    name: "Lienzo para la creación del cronograma de limpieza 5S (c).png",
    href: "/images/lienzos/lienzoimplementacion5Sc.png",
    color: "#794dff",
  },
  {
    title: "Lienzo para facilitar la retrospectiva 5S(d)",
    src: "/images/lienzos/lienzoimplementacion5Sd.png",
    name: "Lienzo para facilitar la retrospectiva 5S(d).png",
    href: "/images/lienzos/lienzoMapeoProcesod.png",
    color: "#794dff",
  },
  {
    title: "Lienzo de Mejora continua 5S(e)",
    src: "/images/lienzos/lienzoimplementacion5Se.png",
    name: "Lienzo de Mejora continua 5S(e).png",
    href: "/images/lienzos/lienzoimplementacion5Se.png",
    color: "#794dff",
  }
]


export default function TablaIterativaEIncremental() {

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
          <td>Planificar la iteración</td>
          <td style={{ backgroundColor: "#c7baf2" }}>Repositorio de ítems de trabajo e ideas</td>
          <td rowspan="3" style={{ padding: '5rem .5rem', backgroundColor: "#c7baf2" }}>< Lienzo data={lienzos[0]} /></td>
        </tr>
        <tr>
          <td>Gestionar los impedimentos</td>
          <td>Impedimento registrado en el lienzo de visualización del trabajo</td>
        </tr>
        <tr>
          <td>Recibir retroalimentación de los actores impactados</td>
          <td style={{ backgroundColor: "#c7baf2" }} >Retroalimentación de los actores impactados por la implementación de la guía</td>
        </tr>

        <tr>
          <td>Realizar retrospectiva </td>
          <td>Acciones de mejora para potenciar el trabajo en equipo y la colaboración. </td>
          <td>< Lienzo data={lienzos[1]} /></td>
        </tr>
        <tr>
          <td>Definir rutinas de trabajo con foco en la cultura de la calidad</td>
          <td style={{ backgroundColor: "#c7baf2" }} >Rutinas, procedimientos y estándares de calidad</td>
          <td style={{ backgroundColor: "#c7baf2" }} >
            <Lienzo data={lienzos[2]} />
            <Lienzo data={lienzos[3]} />
            <Lienzo data={lienzos[4]} />
            <Lienzo data={lienzos[5]} />
            <Lienzo data={lienzos[6]} />
          </td>
        </tr>

      </tbody>
    </Table>
  );
}