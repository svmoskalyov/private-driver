import s from './Reviewer.module.scss'

import { Props } from './Reviewer.types'

import { Avatar } from '../Avatar'
import { Rating } from '../Rating'

export const Reviewer = ({ reviews }: Props) => {
  return (
    <ul className={s.reviewerList}>
      {reviews?.map((e, i) => (
        <li className={s.reviewerItem} key={i}>
          <ul className={s.listBox}>
            <li>
              <Avatar src={e.reviewer_avatar} name='reviewer' />
            </li>
            <li>
              <ul>
                <li>
                  <h3 className={s.reviewerName}>{e.reviewer_name}</h3>
                </li>
                <li>
                  <Rating value={e.reviewer_rating} />
                </li>
              </ul>
            </li>
          </ul>
          <p className={s.reviewerComment}>{e.comment}</p>
        </li>
      ))}
    </ul>
  )
}
