'use client'
import { useForm } from "react-hook-form";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Swal from 'sweetalert2';
import styles from '@/app/auth/login/styles.module.css';
//import Image from 'next/image'


export default function UserLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const router = useRouter();

  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {

    Swal.fire({
      title: "Comprobando usuario",
      icon: "info",
      showConfirmButton: false
    });

    const response = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    })

    console.log('Respuesta: ', response)

    if (response.error) {
      //alert(response.error) 
      setError(response.error)
    }
    else {
      Swal.close()
      router.push('/about');
      router.refresh();
    }

  });

  return (
    <article className={styles.fondo} >

      <h1 className={styles.title} >Login</h1>

      <form onSubmit={onSubmit} className={styles.formulario}>

        <label htmlFor='email'>Correo electrónico</label>
        <input type="email"
          {...register("email",
            {
              required: {
                value: true,
                message: 'Se requiere este campo'
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

        <label htmlFor='password'>Contraseña</label>
        <input type="password"
          {...register("password",
            {
              required: {
                value: true,
                message: 'Se requiere este campo'
              }
            }
          )}
          placeholder='*****'
        />
        {errors.password && <p>{errors.password.message}</p>}

        {error && <p className={styles.error}>{error}</p>}

        <button className={styles.submitbutton}>Enviar</button>

      </form>
    </article>
  )
}