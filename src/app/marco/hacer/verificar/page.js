import TablaVerificar from "./tablaVerificar";
import style from '../page.module.css'

export default function Verificar() {
  return (
    <main className={style.stagesContainer}>
      <h3> Verificar que haya mejora y entrega de valor</h3>
      <p>
        Se implementa el eje de valoracion de los <b>resultados</b> y la
        <b>entrega de valor</b>. El equipo identifica las métricas que le
        permitirán detectar las oportunidades de mejora y evaluar la entrega de
        valor
      </p>
      <p><b>Se conforma de cuatro (4) parámetros básicos:</b></p>
      <div className={style.parametrosContainer} style={{ marginBottom: '3rem' }}>
        <p className={style.parametros} style={{ backgroundColor: '#f0caca' , border: '2px solid #ec4e70' }}><b>Grados</b> de autonomía de los estudiantes durante el proceso de aprendizaje de la habilidad</p>
        <p className={style.parametros} style={{ backgroundColor: '#f0caca' , border: '2px solid #ec4e70' }}><b>Estadío</b> del aprendizaje durante el proceso de desarrollo de la habilidad</p>
        <p className={style.parametros} style={{ backgroundColor: '#f0caca' , border: '2px solid #ec4e70' }}>Los <b>aspectos</b> de las habilidades que incorpora durante el proceso de aprendizaje</p>
        <p className={style.parametros} style={{ backgroundColor: '#f0caca' , border: '2px solid #ec4e70' }}><b>Momentos</b> por los que atraviesa el estudiante durante el proceso de aprendizaje</p>
      </div>
      <div style={{ border: "3px solid #ec4e70" }}  >
        <TablaVerificar />
      </div>
    </main>
  );
}
