'use client'
import styles from '@/app/register/styles.module.css';
import { useForm } from "react-hook-form";
import Image from 'next/image'


export default function Woman() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <article className={styles.fondo} >

      <h1 className={styles.title} >Formulario de registro</h1>

      <form onSubmit={onSubmit} className={styles.formulario}>

        <label htmlFor='shortName' >Nombre</label>
        <input
          type="text"
          {...register("shortName", {
            required: {
              value: true,
              message: 'Se requiere este campo'
            },
            minLength: {
              value: 2,
              message: 'El valor mínimo de caracteres es 2'
            },
            maxLength: {
              value: 30,
              message: 'El valor máximo de caracteres es 30'
            },
          })}
        />
        {errors.shortName && <p>{errors.shortName.message}</p>}

        <label htmlFor='lastName'>Apellido</label>
        <input
          type="text"
          {...register("lastName",
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
                value: 30,
                message: 'El valor máximo de caracteres es 30'
              },
            }
          )}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}

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
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor='company'>Organización</label>
        <input type="text" />

        <label htmlFor='password'>Contraseña</label>
        <input type="password"
          {...register("password",
            {
              required: {
                value: true,
                message: 'Se requiere este campo'
              },
              pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,20}$/,
                message: 'La contraseña debe tener en 8 y 20 digitos, contener minúsculas, maúsculas y números. No admite simbolos.'
              }
            }
          )}
        />
        {errors.password && <p>{errors.password.message}</p>}


        <label htmlFor='repassword'>Confirmar contraseña</label>
        <input type="password"
          {...register("repassword",
            {
              required: {
                value: true,
                message: 'Se requiere este campo'
              },
              validate: (value) => {
                if (value === watch('password')) return true
                else return 'Contraseña distinta'
              }
            }
          )}
        />
        {errors.repassword && <p>{errors.repassword.message}</p>}

        <Image
          src='/images/avatar.jpg'
          width={100}
          height={100}
          alt='avatar'
          className={styles.avatar}
          />
        <label htmlFor='avatar' >Avatar</label>
        <input type="file" {...register('avatar')} />

        <div>
          <input type="checkbox" {...register("newsletter")} />
          <label htmlFor='newsletter'> Desea suscribirse a nuestros Newsletters</label>
        </div>

        <button className={styles.submtibutton}>Enviar</button>

        

      </form>
    </article>
  )
}