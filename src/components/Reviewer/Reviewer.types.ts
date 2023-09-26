// export type Props = {
//   reviews: {
//     reviewer_name: string
//     reviewer_rating: number
//     reviewer_avatar: string
//     comment: string
//   }[]
// }

export type Props = Pick<Driver, 'reviews'>
