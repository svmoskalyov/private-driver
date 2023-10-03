import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'

import s from './FormBook.module.scss'

type FormValues = {
  name: string
  email: string
  phone: string
  planning: string
}

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Username must be at least 2 characters')
    .max(32, 'Username must be less than or equal to 32 characters')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name must contain letters, numbers and space',
    )
    .required('Username is a required field'),
  email: yup
    .string()
    .email('Email must be a valid email')
    .min(3, 'Email must be at least 3 characters')
    .max(64, 'Email must be less than or equal to 64 characters')
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Email address must be a valid address',
    )
    .required('Email is a required field'),
  phone: yup
    .string()
    .min(8, 'Phone must be at least 8 characters')
    .max(64, 'Phone must be less than or equal to 64 characters')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Invalid phone number format',
    )
    .required('Phone is a required field'),
  planning: yup.string().required('Choice is a required field'),
})

export const FormBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(schema) })
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div className={s.formBook}>
      <h2 className={s.titleBook}>Book a trip</h2>

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
          <p style={{ color: 'red' }}>{errors.planning.message}</p>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Full Name</span>
          <input {...register('name')} type='text' />
        </label>
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

        <label>
          <span>Email</span>
          <input {...register('email')} type='email' />
        </label>
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

        <label>
          <span>Phone Number</span>
          <input {...register('phone')} type='tel' />
        </label>
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}

        <button>Send</button>
      </form>
    </div>
  )
}
