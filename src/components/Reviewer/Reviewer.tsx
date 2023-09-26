import s from './Reviewer.module.scss'

import { Props } from './Reviewer.types'

import { Avatar } from '../Avatar'

export const Reviewer = ({ reviews }: Props) => {
  return (
    <div className={s.reviewer}>
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
  )
}
