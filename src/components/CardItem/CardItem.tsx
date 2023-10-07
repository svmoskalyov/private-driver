import { useState } from 'react'

import s from './CardItem.module.scss'

import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { DriverCategories } from '../DriverCategories'
import { DriverInfo } from '../DriverInfo'
import { DriverTopInfo } from '../DriverTopInfo'
import { FormBook } from '../FormBook'
import { Heart } from '../Heart'

import { Modal } from '../Modal'
import { Reviewer } from '../Reviewer'

export const CardItem = (el: DriverFav) => {
  const {
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
  } = el

  const [showMore, setShowMore] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <li key={driverId} className={s.cardItem}>
        <Avatar src={driver_avatar} alt='avatar driver' />

        <div>
          <div className={s.topWrapper}>
            <DriverTopInfo
              rating={rating}
              price_per_hour={price_per_hour}
              trips_made={trips_made}
            />

            <Heart {...el} />
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
              onClick={toggleModal}
              aria-label='button book a trip'
            >
              Book a trip
            </Button>
          )}
        </div>
      </li>

      {showModal && (
        <Modal onClose={toggleModal}>
          <FormBook
            driver_avatar={driver_avatar}
            name={name}
            surname={surname}
            onClose={toggleModal}
          />
        </Modal>
      )}
    </>
  )
}
