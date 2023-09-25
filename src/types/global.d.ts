export {}

declare module '*.svg' {
  const content: unknown
  export default content
}

declare module '*.png' {
  const content: unknown
  export default content
}

declare global {
  type Driver = {
    driverId: number
    name: string
    surname: string
    languages: string[]
    categories: string[]
    rating: number
    reviews: {
      reviewer_name: string
      reviewer_rating: number
      reviewer_avatar: string
      comment: string
    }[]
    price_per_hour: number
    trips_made: number
    driver_avatar: string
    driver_info: string
    skills: string[]
    experience: string
  }

  type DriverFav = Driver & {
    isFav: boolean
  }
}
