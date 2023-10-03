import { useForm, SubmitHandler } from 'react-hook-form'

import s from './FormBook.module.scss'

type FormValues = {
  name: string
  email: string
  phone: string
}

export const FormBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div className={s.formBook}>
      <h2>Book a trip</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Full Name
          <input
            type='text'
            {...register('name', {
              required: 'Name is required',
              validate: {
                maxLength: (v) =>
                  v.length >= 2 ||
                  'The username should have at least 2 characters',
                matchPattern: (v) =>
                  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(
                    v,
                  ) || 'Name must contain only letters, numbers and space',
              },
              // required: true,
              // maxLength: 30,
              // pattern: /^[a-zA-Z0-9 ]+$/,
            })}
            placeholder='Your name'
          />
        </label>

        {errors?.name?.message && (
          <small style={{ color: 'red' }}>{errors.name.message}</small>
        )}

        {/* {errors.name && errors.name.type === 'required' && (
          <small style={{ color: 'red' }}>Name is required</small>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <small>Max length exceeded</small>
        )}
        {errors.name?.type === 'pattern' && (
          <small>Name must contain only letters, numbers and space</small>
        )} */}

        <label>
          Email
          <input
            type='email'
            {...register('email', {
              required: 'Email is required',
              validate: {
                maxLength: (v) =>
                  v.length <= 50 ||
                  'The email should have at most 50 characters',
                matchPattern: (v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  'Email address must be a valid address',
              },
              // required: true,
              // maxLength: 50,
              // pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            })}
            placeholder='email'
          />
        </label>

        {errors?.email?.message && (
          <small style={{ color: 'red' }}>{errors.email.message}</small>
        )}

        {/* {errors?.email?.type === 'required' && (
          <small role='alert'>Email is required</small>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <small>The email should have at most 50 characters</small>
        )}
        {errors?.email?.type === 'pattern' && (
          <small>Email address must be a valid address</small>
        )} */}

        <label>
          Phone Number
          <input
            type='tel'
            {...register('phone', {
              required: 'Phone is required',
              validate: {
                maxLength: (v) =>
                  v.length === 9 ||
                  'The email should have at most 50 characters',
                matchPattern: (v) =>
                  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(
                    v,
                  ) || 'Email address must be a valid address',
              },
              // required: true,
              // pattern: /\d{11}/,
            })}
            placeholder='000-00-00'
          />
        </label>

        {errors?.phone?.message && (
          <small style={{ color: 'red' }}>{errors.phone.message}</small>
        )}

        {/* {errors?.phone?.type === 'required' && (
          <div>Phone number is required.</div>
        )}
        {errors?.phone?.type === 'pattern' && (
          <div>Phone number should contain 11 digits.</div>
        )} */}

        <button>Send</button>
      </form>
    </div>
  )
}
