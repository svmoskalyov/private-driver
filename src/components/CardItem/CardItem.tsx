import s from './CardItem.module.scss'

import { Avatar } from '../Avatar'
import { Button } from '../Button'
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
      <div className={s.avatarDriverWrapper}>
        <Avatar src={driver_avatar} alt='avatar driver' />
      </div>

      <div>
        <h2>
          {name} {surname}
        </h2>
        <ul>
          <li>
            Speaks:
            {languages?.map((e, i) => <span key={i}>{e}</span>)}
          </li>
          <li>
            Driver Info:
            <p>{driver_info}</p>
          </li>
          <li>
            Skills:
            {skills?.map((e, i) => <span key={i}>{e}</span>)}
          </li>
        </ul>
      </div>

      <div>
        <p>{experience}</p>
        <div>
          <Reviewer reviews={reviews} />
        </div>
      </div>

      <div>
        <ul>{categories?.map((e, i) => <li key={i}> {e} </li>)}</ul>
      </div>

      <div>
        <ul>
          <li>Trips made: {trips_made}</li>
          <li>Rating {rating}</li>
          <li>
            Price / 1 hour:
            <span>{price_per_hour}$</span>
          </li>
        </ul>
      </div>

      <Heart isFav={isFav} />

      <Button
        className={s.btnBookTrip}
        onClick={() => console.log('Book a trip')}
        aria-label='button book a trip'
      >
        book a trip
      </Button>
    </li>
  )
}
