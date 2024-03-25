'use client'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { useForm as useFormspree } from "@formspree/react";
import Swal from 'sweetalert2';
//import styles from '@/app/contactanos/styles.module.css';
import styles from '@/app/auth/styles.module.css';

function mergeErrors(formspreeErrors, otherErrors = {}) {
  // merge server side errors into react-hook-form errors
  return {
    // ...formspreeErrors.reduce(
    //   (acc, cur) => ({
    //     [cur.field || "form"]: {
    //       message: (cur.field ? "This " : "") + cur.message
    //     },
    //     ...acc
    //   }),
    //   {}
    // ),
    ...otherErrors
  };
}


export default function ContactUs() {

  const [serverState, sendToFormspree] = useFormspree("xnqybjrw");
  const {
    register,
    formState,
    handleSubmit
  } = useForm();
  const errors = mergeErrors(serverState.errors, formState.errors);
  const router = useRouter();

  if (serverState.submitting){
    Swal.fire({
      title: "Enviando comentarios",
      icon: "info",
      showConfirmButton: false
    });
  } 
  if (serverState.succeeded) {
    Swal.close()
      Swal.fire({
        title: 'Se ha enviado tu comentario',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      })
      router.push('/')
    }


  return (
    <article className={styles.fondo} >

      <h1 className={styles.title} >Formulario de Contacto</h1>
      <h3> Llená el siguiente formulario y comentanos dudas o sugerencias.</h3>
      <h3> Te contestaremos prontamente.</h3>

      <form onSubmit={handleSubmit(sendToFormspree)} className={styles.formulario}>
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