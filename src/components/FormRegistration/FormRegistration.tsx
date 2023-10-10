import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FiEye, FiEyeOff } from 'react-icons/fi'

import s from './FormRegistration.module.scss'
import { Props, RegistrationForm } from './FormRegistration.types'

import { registerSchema } from '../../utils/yupSchemas'
import { Button } from '../Button'

export const FormRegistration = ({ onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>({ resolver: yupResolver(registerSchema) })

  const [passwordShown, setPasswordShown] = useState<boolean>(false)

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  const onSubmit: SubmitHandler<RegistrationForm> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
    onClose()
  }

  return (
    <div className={s.formRegistration}>
      <h2 className={s.title}>Registration</h2>
      <p className={s.text}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ul className={s.formList}>
          <li className={s.formItem}>
            <input
              className={s.formInput}
              {...register('name')}
              type='text'
              id='name'
              placeholder=' '
            />
            <label className={s.formLabel}>Name</label>
            {errors.name && (
              <p className={'errorForm'}>{errors.name.message}</p>
            )}
          </li>

          <li className={s.formItem}>
            <input
              className={s.formInput}
              {...register('email')}
              type='email'
              id='email'
              placeholder=' '
            />
            <label className={s.formLabel}>Email</label>
            {errors.email && (
              <p className={'errorForm'}>{errors.email.message}</p>
            )}
          </li>

          <li className={s.formItem}>
            <input
              className={s.formInput}
              {...register('password')}
              type={passwordShown ? 'text' : 'password'}
              id='password'
              placeholder=' '
            />
            {passwordShown ? (
              <FiEye className={s.eye} onClick={togglePassword} />
            ) : (
              <FiEyeOff className={s.eye} onClick={togglePassword} />
            )}
            <label className={s.formLabel}>Password</label>
            {errors.password && (
              <p className={'errorForm'}>{errors.password.message}</p>
            )}
          </li>
        </ul>

        <Button
          type='submit'
          className={s.btnRegistration}
          aria-label='button registration'
        >
          Sign Up
        </Button>
      </form>
    </div>
  )
}