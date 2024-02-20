'use client'
import { useEffect, useState } from 'react'
// import RowDescription from './rowDescription';
import styles from './navbar.module.css'


export default function Descripcion({ data }) {
  const [ampliar, setAmpliar] = useState(false);
  const [descripcion, setDescripcion] = useState(data.text)

  const arrayLength = 130;
  const lengthDataText = data.text.length

  useEffect(()=> {
    if (ampliar)
    {setDescripcion(data.text)}
    else {
      if (lengthDataText > arrayLength) setDescripcion(data.text.slice(0, arrayLength) + '...')
      else setDescripcion(data.text.slice(0, arrayLength));
    }
  },[ampliar])

  function Description(description) {
    return description
  }

  return (
    <article key={data.id} className={styles.card} style={{ backgroundColor:`${data.colorCard}`}}>
      <h2>{data.id}</h2>
      {/* <div dangerouslySetInnerHTML={{__html: Verify(data.text)}} /> */}
      <div>{descripcion}</div>
      {/* <RowDescription data={data.text} /> */}
      <ul style={{ paddingLeft: '2rem', lineHeight: '1.2', listStyleType: `${data.listStyle}` }}>

        {(data.list && ampliar) ?
          data.contentList.map((item, id) => <li key={id} style={{ padding: '.5rem 0' }}>{item}</li>)
          : ''
        }
      </ul>
      { (lengthDataText > arrayLength) || data.list
      ? (ampliar 
        ? <button onClick={() => setAmpliar(false)} className={styles.btn} >Reducir</button> 
        : <button onClick={() => setAmpliar(true)}  className={styles.btn} >Ampliar</button>
        )
      :''
      } 
    </article>

  )
}