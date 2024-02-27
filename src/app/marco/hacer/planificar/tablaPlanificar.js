"use client"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Lienzo from '../lienzo'

const lienzos = [
  {
    title: "Lienzo de Valores",
    description:"Socializar el contenido de la guía y realizar acuerdos de trabajo para la implementación de la guía.",
    src: "/images/lienzos/01-planificar/lienzoValores01.png",
    name: "Lienzo de Valores.png",
    href: "/images/lienzos/01-planificar/lienzoValores01.png",
    color: "#e69500",
  },
  {
    title: "Lienzo de Acuerdos",
    description:"Socializar el contenido de la guía y realizar acuerdos de trabajo para la implementación de la guía.",
    src: "/images/lienzos/01-planificar/lienzoAcuerdos01.png",
    name: "Lienzo de Acuerdos.png",
    href: "/images/lienzos/01-planificar/lienzoAcuerdos01.png",
    color: "#e69500",
  },
  {
    title: "Lienzo de Narrativas culturales",
    description:"Identificar las narrativas culturales",
    src: "/images/lienzos/01-planificar/lienzoNarrativasCulturales01.png",
    name: "Lienzo de Narrativas Culturales.png",
    href: "/images/lienzos/01-planificar/lienzoNarrativasCulturales01.png",
    color: "#e69500",
  },
  {
    title: "Lienzo de descubrimiento de desafios",
    description:"Realizar un diagnóstico y definir el desafío a trabajar.",
    src: "/images/lienzos/01-planificar/lienzoDescubrimientoDesafio01.png",
    name: "Lienzo de descubrimiento de desafios.png",
    href: "/images/lienzos/01-planificar/lienzoDescubrimientoDesafio01.png",
    color: "#e69500",
  },
  {
    title: "Lienzo de habilidades ciudadanas",
    description:"Identificar habilidades ciudadanas a desarrollar.",
    src: "/images/lienzos/01-planificar/lienzoHabilidadesCiudadanas01.png",
    name: "Lienzo de habilidades ciudadanas.png",
    href: "/images/lienzos/01-planificar/lienzoHabilidadesCiudadanas01.png",
    color: "#e69500",
  },
  {
    title: "Lienzo de mapeo de los procesos",
    description:"Mapear los procesos de gestión institucional. ",
    src: "/images/lienzos/01-planificar/lienzoMapeoProcesos01.png",
    name: "Lienzo de mapeo de los procesos.png",
    href: "/images/lienzos/01-planificar/lienzoMapeoProcesos01.png",
    color: "#e69500",
  },
  {
    title: "Lienzo de Objetivos y Resultados",
    description:"Definir objetivos y resultados esperados a partir de la implementación de la guía",
    src: "/images/lienzos/01-planificar/lienzoDefinicionObjetivos01.png",
    name: "Lienzo de Objetivos y Resultados.png",
    href: "/images/lienzos/01-planificar/lienzoDefinicionObjetivos01.png",
    color: "#e69500",
  },
  {
    title: "Lienzo de experiencias formativa",
    description:"Definir objetivos y resultados esperados a partir de la implementación de la guía de Experiencia Formativa ",
    src: "/images/lienzos/01-planificar/lienzoExperienciaFormativa01.png",
    name: "Lienzo de experiencias formativa.png",
    href: "/images/lienzos/01-planificar/lienzoExperienciaFormativa01.png",
    color: "#e69500",
  },
  {
    title: "Lienzo de Mapeo de Acciones",
    description:"Definir hoja de ruta",
    src: "/images/lienzos/01-planificar/lienzoMapeoAcciones01.png",
    name: "Lienzo de Mapeo de Acciones.png",
    href: "/images/lienzos/01-planificar/lienzoMapeoAcciones01.png",
    color: "#e69500",
  },
]


export default function TablaPlanificar() {

  return (
    <Table className="striped bordered responsive size='xl'" >
      <thead>
        <tr>
          <th style={{ width: '30%' }} >Objetivos</th>
          <th style={{ width: '30%' }} >Entregable</th>
          <th>Prácticas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Socializar el contenido de la guia y realizar acuerdo de trabajo para su implementación</td>
          <td style={{backgroundColor:"#e9cfa2"}} >Taller de Socialización y Acuerdos de Trabajo</td>
          <td style={{backgroundColor:"#e9cfa2"}} >
            <p style={{margin: ".1rem .5rem"}} >Pautas para facilitar el taller de sensibilización</p>
            < Lienzo data={lienzos[0]} color={'#e69500'}/>
            < Lienzo data={lienzos[1]} />
          </td>
        </tr>
        <tr>
          <td>Identificar las Narrativas Culturales</td>
          <td>Narrativas y Relatos</td>
          <td>< Lienzo data={lienzos[2]} /></td>
        </tr>
        <tr>
          <td>Nivelacion de Habilidades en Calidad</td>
          <td style={{backgroundColor:"#e9cfa2"}} >Taller de capacitación en Calidad</td>
          <td style={{backgroundColor:"#e9cfa2"}} >
            <p style={{margin: ".1rem .5rem"}} >Taller de capacitación </p>
          </td>
        </tr>
        <tr>
          <td>Realizar un diagnostico y definir el desafio a trabajar</td>
          <td>Acuerdo sobre el desafio a trabajar</td>
          <td>< Lienzo data={lienzos[3]} /></td>
        </tr>
        <tr>
          <td>Identificar Habilidades ciudadanas a desarrollar</td>
          <td style={{backgroundColor:"#e9cfa2"}} >Habilidades ciudadanas a desarrollar</td>
          <td style={{backgroundColor:"#e9cfa2"}} >< Lienzo data={lienzos[4]} /></td>
        </tr>
        <tr>
          <td>Mapear los procesos de Gestion Institucional</td>
          <td>Mapa de procesos e identificacion de la etapa del desafio</td>
          <td>< Lienzo data={lienzos[5]} /></td>
        </tr>
        <tr>
          <td>Definir Objetivos y Resultados esperados</td>
          <td style={{backgroundColor:"#e9cfa2"}} > Objetivos y Resultados esperados y experiencia formativa</td>
          <td style={{backgroundColor:"#e9cfa2"}} >
            < Lienzo data={lienzos[6]} />
            < Lienzo data={lienzos[7]} />
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