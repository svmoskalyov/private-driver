import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'

import s from './FormBook.module.scss'
import { BookForm } from './FormBook.types'

import { bookSchema } from '../../utils/yupSchemas'

export const FormBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookForm>({ resolver: yupResolver(bookSchema) })

  const onSubmit: SubmitHandler<BookForm> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
    reset()
  }

  return (
    <div className={s.formBook}>
      <h2 className={s.title}>Book a trip</h2>

      <div>
        <p>What kind of trip are you planning?</p>
        <label>
          <input {...register('planning')} type='radio' value='business' />
          business
        </label>

        <label>
          <input {...register('planning')} type='radio' value='free' />
          free
        </label>

        <label>
          <input {...register('planning')} type='radio' value='party' />
          party
        </label>
        {errors.planning && (
          <p style={{ color: 'red', fontSize: '12px' }}>
            {errors.planning.message}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Full Name</span>
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
          <span>Phone Number</span>
          <input {...register('phone')} type='tel' />
        </label>
        {errors.phone && (
          <p style={{ color: 'red', fontSize: '12px' }}>
            {errors.phone.message}
          </p>
        )}

        <button>Book</button>
      </form>
    </div>
  )
}
