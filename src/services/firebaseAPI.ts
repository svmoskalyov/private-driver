import axios from 'axios'

import { db } from './firebaseConfig'

axios.defaults.baseURL = db.options.databaseURL

export const getTotalDriversApi = async (): Promise<Driver[]> => {
  const { data } = await axios.get<Driver[]>('/drivers.json')
  return data
}

export const getDriversApi = async (
  startId: number = 1201,
): Promise<Driver[]> => {
  const limit = 3
  const endId = startId + limit

  const res = await axios
    .get<Driver[]>('/drivers.json', {
      params: {
        orderBy: `"driverId"`,
        startAt: startId,
        endAt: endId,
        print: 'pretty',
      },
    })
    .then(({ data }) =>
      Object.entries(data).map(([, drivers]) => ({ ...drivers })),
    )

  return res
}
