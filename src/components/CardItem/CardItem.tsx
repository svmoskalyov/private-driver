import { useState } from 'react'

import s from './CardItem.module.scss'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { selectShowModal } from '../../redux/drivers/driversSelectors'
import { toggleModal } from '../../redux/drivers/driversSlice'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { DriverCategories } from '../DriverCategories'
import { DriverInfo } from '../DriverInfo'
import { DriverTopInfo } from '../DriverTopInfo'
import { Heart } from '../Heart'

import { Modal } from '../Modal'
import { Reviewer } from '../Reviewer'

export const CardItem = ({
  driverId,
  name,
  surname,
  languages,
  categories,
  rating,
  reviews,
  price_per_hour,
  trips_made,
  driver_avatar,
  driver_info,
  skills,
  experience,
  isFav,
}: DriverFav) => {
  const dispatch = useAppDispatch()
  const showModal = useAppSelector<boolean>(selectShowModal)
  const [showMore, setShowMore] = useState<boolean>(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <>
      <li key={driverId} className={s.cardItem}>
        <Avatar src={driver_avatar} />

        <div>
          <div className={s.topWrapper}>
            <DriverTopInfo
              rating={rating}
              price_per_hour={price_per_hour}
              trips_made={trips_made}
            />

            <Heart isFav={isFav} />
          </div>

          <h2 className={s.driverName}>
            {name} {surname}
          </h2>

          <DriverInfo
            languages={languages}
            driver_info={driver_info}
            skills={skills}
          />

          {!showMore && (
            <Button
              className={s.btnMore}
              onClick={toggleShowMore}
              aria-label='button read more'
            >
              Read more
            </Button>
          )}

          {showMore && (
            <>
              <p className={s.experience}>{experience}</p>
              <Reviewer reviews={reviews} />
            </>
          )}

          <DriverCategories categories={categories} />

          {showMore && (
            <Button
              className={s.btnBookTrip}
              onClick={() => dispatch(toggleModal())}
              aria-label='button book a trip'
            >
              Book a trip
            </Button>
          )}
        </div>
      </li>

      {showModal && (
        <Modal>
          <div>Book a trip</div>
        </Modal>
      )}
    </>
  )
}
