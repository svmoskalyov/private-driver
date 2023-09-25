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
      comment: string
    }[]
    price_per_hour: number
    trips_made: number
    avatar_url: string
    driver_info: string
    skills: string[]
    experience: string
  }
}
