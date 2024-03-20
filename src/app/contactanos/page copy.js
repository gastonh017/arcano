'use client'
import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import styles from '@/app/contactanos/styles.module.css';


export default function UserRegister() {
  const {
    register, 
    handleSubmit,
    formState
  } = useForm();
  const [serverState, sendToFormspree] = useFormspree("mnqkjajo"); // replace
  const errors = mergeErrors(serverState.errors, formState.errors);

  if (serverState.succeeded) {
    return (
      <div className="App">
        <h1>Thanks!</h1>
      </div>
    );
  }
  return (
    <article className={styles.fondo} >

      <h1 className={styles.title} >Formulario de Contacto</h1>
      <h3> Llená el siguiente formulario y comentanos dudas o sugerencias.</h3>
      <h3> Te contestaremos prontamente.</h3>

      <form onSubmit={handleSubmit(sendToFormspree)}>
        <label htmlFor='firstname' >Nombre y Apellido</label>
        <input
          type="text"
          {...register("firstname", {
            required: {
              value: true,
              message: 'Se requiere este campo'
            },
            minLength: {
              value: 2,
              message: 'El valor mínimo de caracteres es 2'
            },
            maxLength: {
              value: 50,
              message: 'El valor máximo de caracteres es 50'
            },
          })}
          placeholder='nombre'
        />
        {errors.firstname && <p>{errors.firstname.message}</p>}

        <label htmlFor='company'>Organización</label>
        <input type="text"
          {...register("company",
            {
              maxLength: {
                value: 50,
                message: 'El valor máximo de caracteres es 50'
              }
            }
          )}
          placeholder='organización'
        />
        {errors.company && <p>{errors.company.message}</p>}


        <label htmlFor='email'>Correo electrónico</label>
        <input type="email"
          {...register("email",
            {
              required: {
                value: true,
                message: 'Se requiere este campo'
              },
              minLength: {
                value: 2,
                message: 'El valor mínimo de caracteres es 2'
              },
              maxLength: {
                value: 50,
                message: 'El valor máximo de caracteres es 50'
              },
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Es necesario un correo válido'
              }
            }
          )}
          placeholder='user@mail.com'
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor='message'>Comentarios</label>
        <textarea
          type="text"
          {...register("message",
            {
              required: {
                value: true,
                message: 'Se requiere este campo'
              },
              minLength: {
                value: 2,
                message: 'El valor mínimo de caracteres es 2'
              },
              maxLength: {
                value: 500,
                message: 'El valor máximo de caracteres es 500'
              },
            })}
          placeholder='comentarios' rows={10}
          className={styles.comentarios}
        />
        {errors.message && <p>{errors.message.message}</p>}

        <button className={styles.submitbutton}>Enviar</button>

      </form>
    </article>
  )
}