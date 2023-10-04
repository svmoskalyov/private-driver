import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'

import s from './FormLogin.module.scss'
import { LoginForm } from './FormLogin.types'

import { loginSchema } from '../../utils/yupSchemas'

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>({ resolver: yupResolver(loginSchema) })

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
    reset()
  }

  return (
    <div className={s.formLogin}>
      <h2 className={s.title}>Log In</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Email</span>
          <input {...register('email')} type='email' />
        </label>
        {errors.email && (
          <p style={{ color: 'red', fontSize: '12px' }}>
            {errors.email.message}
          </p>
        )}

        <label>
          <span>Password</span>
          <input {...register('password')} type='password' />
        </label>
        {errors.password && (
          <p style={{ color: 'red', fontSize: '12px' }}>
            {errors.password.message}
          </p>
        )}

        <button>Log In</button>
      </form>
    </div>
  )
}
