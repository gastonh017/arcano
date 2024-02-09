"use client"

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Lienzo from './lienzo'

const lienzos = [
  {
    title: "Lienzo de Valores",
    src: "/images/lienzos/lienzoValores.png",
    name: "Lienzo de Valores.png",
    href: "/images/lienzos/lienzoValores.png",
  },
  {
    title: "Lienzo de Acuerdos",
    src: "/images/lienzos/lienzoAcuerdos.png",
    name: "Lienzo de Acuerdos.png",
    href: "/images/lienzos/lienzoAcuerdos.png",
  },
  {
    title: "Lienzo de Narrativas culturales",
    src: "/images/lienzos/lienzoNarrativasCulturales.png",
    name: "Lienzo de Narrativas Culturales.png",
    href: "/images/lienzos/lienzoNarrativasCulturales.png",
  },
  {
    title: "Lienzo de descubrimiento de desafios",
    src: "/images/lienzos/lienzoDescubrimientoDesafio.png",
    name: "Lienzo de descubrimiento de desafios.png",
    href: "/images/lienzos/lienzoDescubrimientoDesafio.png",
  },
  {
    title: "Lienzo de habilidades ciudadanas",
    src: "/images/lienzos/lienzoHabilidadesCiudadanas.png",
    name: "Lienzo de habilidades ciudadanas.png",
    href: "/images/lienzos/lienzoHabilidadesCiudadanas.png",
  },
  {
    title: "Lienzo de mapeo de los procesos",
    src: "/images/lienzos/lienzoMapeoProcesos.png",
    name: "Lienzo de mapeo de los procesos.png",
    href: "/images/lienzos/lienzoMapeoProcesos.png",
  },
  {
    title: "Lienzo de Objetivos y Resultados",
    src: "/images/lienzos/lienzoDefinicionObjetivos.png",
    name: "Lienzo de Objetivos y Resultados.png",
    href: "/images/lienzos/lienzoDefinicionObjetivos.png",
  },
  {
    title: "Lienzo de experiencias formativa",
    src: "/images/lienzos/lienzoExperienciaFormativa.png",
    name: "Lienzo de experiencias formativa.png",
    href: "/images/lienzos/lienzoExperienciaFormativa.png",
  },
  {
    title: "Lienzo de Mapeo de Acciones",
    src: "/images/lienzos/lienzoMapeoAcciones.png",
    name: "Lienzo de Mapeo de Acciones.png",
    href: "/images/lienzos/lienzoMapeoAcciones.png",
  },
]


function TablaPlanificar1() {

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
              <li>< Lienzo data={lienzos[0]} /></li>
              <li>< Lienzo data={lienzos[1]} /></li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Identificar las Narrativas Culturales</td>
          <td>Narrativas y Relatos</td>
          <td>< Lienzo data={lienzos[2]} /></td>
        </tr>
        <tr>
          <td>Nivelacion de Habilidades en Calidad</td>
          <td>Taller de capacitación en Calidad</td>
          <td>Taller de capacitación </td>
        </tr>
        <tr>
          <td>Realizar un diagnostico y definir el desafio a trabajar</td>
          <td>Acuerdo sobre el desafio a trabajar</td>
          <td>< Lienzo data={lienzos[3]} /></td>
        </tr>
        <tr>
          <td>Identificar Habilidades ciudadanas a desarrollar</td>
          <td>Habilidades ciudadanas a desarrollar</td>
          <td>< Lienzo data={lienzos[4]} /></td>
        </tr>
        <tr>
          <td>Mapear los procesos de Gestion Institucional</td>
          <td>Mapa de procesos e identificacion de la etapa del desafio</td>
          <td>< Lienzo data={lienzos[5]} /></td>
        </tr>
        <tr>
          <td>Definir Objetivos y Resultados esperados</td>
          <td> Objetivos y Resultados esperados y experiencia formativa</td>
          <td>
            <ul>
              <li>< Lienzo data={lienzos[6]} /></li>
              <li>< Lienzo data={lienzos[7]} /></li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Definir la hoja de ruta</td>
          <td>Plan de trabajo</td>
          <td>< Lienzo data={lienzos[8]} /></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TablaPlanificar1;