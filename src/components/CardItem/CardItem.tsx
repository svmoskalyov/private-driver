import s from './CardItem.module.scss'
import { DriverFav } from './CardItem.types'

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
  avatar_url,
  driver_info,
  skills,
  experience,
  isFav,
}: DriverFav) => {
  return (
    <li key={driverId} className={s.cardItem}>
      <div className={s.avatarWrapper}>
        <img
          className={s.avatarDriver}
          loading='lazy'
          src={avatar_url && `${avatar_url}`}
          width={96}
          height={96}
          alt='avatar driver'
        />
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
        Read more
        <p>{experience}</p>
        <div>
          <ul>
            {reviews?.map((e, i) => (
              <li key={i}>
                <div>avatar</div>
                <h3>{e.reviewer_name}</h3>
                <span>{e.reviewer_rating}</span>
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
          <input type='checkbox' name='status' checked={isFav} />
        </label>
      </div>

      <button type='button'>book a trip</button>
    </li>
  )
}

/*
{
    // "driverId": 1201,
    // "name": "John",
    // "surname": "Doe",
    // "languages": ["English", "Spanish"],
    // "categories": ["A", "B", "BE", "C", "CE", "D", "DE"],
    // "rating": 4.5,
    "reviews": [
      {
        "reviewer_name": "Alice",
        "reviewer_rating": 5,
        "comment": "John is an excellent driver! I highly recommend him."
      },
      {
        "reviewer_name": "Bob",
        "reviewer_rating": 4,
        "comment": "John is very communicative and positive. I highly recommend him."
      }
    ],
    // "price_per_hour": 25,
    // "trips_made": 1375,
    // "avatar_url": "https://res.cloudinary.com/dganwbeyi/image/upload/v1694028291/avatarsdriver/ugujgkn2acxzgnpaciiz.jpg",
    // "driver_info": "Friendly and outgoing car driver proficient in safe operations, passenger transportation and inclement weather driving.",
    // "skills": [
    //   "Great communication skills",
    //   "Safety regulations",
    //   "Problem-solving",
    //   "Excellent time management",
    //   "Inclement weather driving"
    // ],
    "experience": "Pick up clients and drop them off at destinations on time. Offer superior service by providing good conversation and a bottle of water for every passenger."
},
*/
