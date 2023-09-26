import s from './CardItem.module.scss'

import { Avatar } from '../../Avatar'

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
          <ul>
            {reviews?.map((e, i) => (
              <li key={i}>
                <div>
                  <Avatar src={e.reviewer_avatar} alt='avatar reviewer' />
                  <div>
                    <h3>{e.reviewer_name}</h3>
                    <span>{e.reviewer_rating}</span>
                  </div>
                </div>
                <p>{e.comment}</p>
              </li>
            ))}
          </ul>
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

      <div>
        <label>
          <input
            type='checkbox'
            name='status'
            checked={isFav}
            onChange={() => console.log('checked')}
          />
        </label>
      </div>

      <button type='button'>book a trip</button>
    </li>
  )
}
