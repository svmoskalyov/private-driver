import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'

import s from './FormRegistration.module.scss'
import { RegistrationForm } from './FormRegistration.types'

import { registerSchema } from '../../utils/yupSchemas'

export const FormRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegistrationForm>({ resolver: yupResolver(registerSchema) })

  const onSubmit: SubmitHandler<RegistrationForm> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
    reset()
  }

  return (
    <div className={s.formRegistration}>
      <h2 className={s.title}>Registration</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Name</span>
          <input {...register('name')} type='text' />
        </label>
        {errors.name && (
          <p style={{ color: 'red', fontSize: '12px' }}>
            {errors.name.message}
          </p>
        )}

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

        <button>Sign Up</button>
      </form>
    </div>
  )
}
