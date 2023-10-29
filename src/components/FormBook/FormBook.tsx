import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'

import s from './FormBook.module.scss'
import { BookForm, Props } from './FormBook.types'

import { bookSchema } from '../../utils/yupSchemas'
import { Avatar } from '../Avatar'
import { Button } from '../Button'

export const FormBook = ({ driver_avatar, name, surname, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookForm>({ resolver: yupResolver(bookSchema) })

  const onSubmit: SubmitHandler<BookForm> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
    onClose()
  }

  return (
    <div className={s.formBook}>
      <h2 className={s.title}>Book a trip</h2>
      <p className={s.text}>
        Our experienced driver will contact you to clarify the details of the
        trip.
      </p>

      <div className={s.driver}>
        <Avatar src={driver_avatar} alt='avatar driver' name='reviewer' />
        <div className={s.driverBox}>
          <p className={s.driverText}>Your driver</p>
          <h3 className={s.driverName}>
            {name} {surname}
          </h3>
        </div>
      </div>

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3 className={s.planningTitle}>
            What kind of trip are you planning?
          </h3>
          <ul className={s.planningList}>
            <li className={s.planningItem}>
              <label className={s.planningLabel}>
                <input
                  {...register('planning')}
                  type='radio'
                  value='business'
                />
                Business
              </label>
            </li>

            <li className={s.planningItem}>
              <label className={s.planningLabel}>
                <input {...register('planning')} type='radio' value='free' />
                Free
              </label>
            </li>

            <li className={s.planningItem}>
              <label className={s.planningLabel}>
                <input {...register('planning')} type='radio' value='party' />
                Party
              </label>
            </li>

            {errors.planning && (
              <p className={'errorForm'}>{errors.planning.message}</p>
            )}
          </ul>
        </div>

        <ul className={s.formList}>
          <li className={s.formItem}>
            <input
              className={s.formInput}
              {...register('name')}
              type='text'
              id='name'
              placeholder=' '
            />
            <label className={s.formLabel}>Full Name</label>
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
              {...register('phone')}
              type='tel'
              id='phone'
              placeholder=' '
            />
            <label className={s.formLabel}>Phone Number</label>
            {errors.phone && (
              <p className={'errorForm'}>{errors.phone.message}</p>
            )}
          </li>
        </ul>

        <Button type='submit' className={s.btnBook} aria-label='button book'>
          Book
        </Button>
      </form>
    </div>
  )
}
