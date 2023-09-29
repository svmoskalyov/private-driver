import s from './CardItem.module.scss'

import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { DriverCategories } from '../DriverCategories'
import { DriverInfo } from '../DriverInfo'
import { DriverTopInfo } from '../DriverTopInfo'
import { Heart } from '../Heart'
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
  return (
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

        <Button
          className={s.btnMore}
          onClick={() => console.log('Read more')}
          aria-label='button read more'
        >
          Read more
        </Button>

        <p className={s.experience}>{experience}</p>
        <Reviewer reviews={reviews} />

        <DriverCategories categories={categories} />

        {/* <DriverTopInfo
          rating={rating}
          price_per_hour={price_per_hour}
          trips_made={trips_made}
        />

        <Heart isFav={isFav} /> */}

        <Button
          className={s.btnBookTrip}
          onClick={() => console.log('Book a trip')}
          aria-label='button book a trip'
        >
          book a trip
        </Button>
      </div>
    </li>
  )
}
