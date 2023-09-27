import s from './Reviewer.module.scss'

import { Props } from './Reviewer.types'

import { Avatar } from '../Avatar'

export const Reviewer = ({ reviews }: Props) => {
  return (
    <div className={s.reviewer}>
      <ul className={s.reviewerList}>
        {reviews?.map((e, i) => (
          <li className={s.reviewerItem} key={i}>
            <div className={s.reviewerBox}>
              <Avatar src={e.reviewer_avatar} name='reviewer' />
              <div className={s.reviewerInfo}>
                <h3 className={s.reviewerName}>{e.reviewer_name}</h3>
                <span className={s.reviewerRaiting}>{e.reviewer_rating}</span>
              </div>
            </div>
            <p className={s.reviewerComment}>{e.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
