import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { BeatLoader } from 'react-spinners'

import s from './FormLogin.module.scss'
import { LoginForm, Props } from './FormLogin.types'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { loginUser } from '../../redux/auth/authOperations'
import {
  selectAuthIsLoading,
  selectIsAuth,
} from '../../redux/auth/authSelectors'
import { loginSchema } from '../../utils/yupSchemas'
import { Button } from '../Button'

export const FormLogin = ({ onClose }: Props) => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector<boolean>(selectAuthIsLoading)
  const isAuth = useAppSelector<boolean>(selectIsAuth)

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
    dispatch(loginUser(data))

    if (isAuth) {
      onClose()
    }
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

        <Button
          type='submit'
          className={s.btnLogin}
          disabled={isLoading}
          aria-label='button login'
        >
          {isLoading ? <BeatLoader /> : 'Log In'}
        </Button>
      </form>
    </div>
  )
}
