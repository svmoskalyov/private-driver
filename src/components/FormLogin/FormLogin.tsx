import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FiEye, FiEyeOff } from 'react-icons/fi'

import s from './FormLogin.module.scss'
import { LoginForm, Props } from './FormLogin.types'

import { loginSchema } from '../../utils/yupSchemas'
import { Button } from '../Button'

export const FormLogin = ({ onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: yupResolver(loginSchema) })
  const [passwordShown, setPasswordShown] = useState<boolean>(false)

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
    onClose()
  }

  return (
    <div className={s.formLogin}>
      <h2 className={s.title}>Log In</h2>
      <p className={s.text}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a driver.
      </p>

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ul className={s.formList}>
          <li className={s.formItem}>
            <input
              className={s.formInput}
              {...register('email')}
              type='email'
              id='email'
              placeholder=' '
            />
            <label htmlFor='email' className={s.formLabel}>
              Email
            </label>
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
            <label htmlFor='password' className={s.formLabel}>
              Password
            </label>
            {errors.password && (
              <p className={'errorForm'}>{errors.password.message}</p>
            )}
          </li>
        </ul>

        <Button type='submit' className={s.btnLogin} aria-label='button login'>
          Log In
        </Button>
      </form>
    </div>
  )
}
