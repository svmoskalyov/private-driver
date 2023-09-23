import axios from 'axios'

import { db } from './firebaseConfig'
// console.log('🚀 ~ db:', db.options.databaseURL)

axios.defaults.baseURL = db.options.databaseURL

export const getTotalDriversApi = async (): Promise<Driver[]> => {
  const { data } = await axios.get<Driver[]>('/drivers.json')
  return data
}

export const getDriversApi = async (startId = 1201) => {
  const limit = startId === 1201 ? 4 : 3
  const endId = startId + limit

  const res = await axios
    .get('/drivers.json', {
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

/**
const database = getDatabase(db)
const dbRef = ref(database, '/drivers')

export const getTotalDriversApi = async () => {
  onValue(dbRef, (snap) => {
    const data = snap.val() || []

    return data
  })
}

export const getDriversApi = () => {
  onValue(
    query(dbRef, orderByChild('driverId'), limitToFirst(4), startAt(1201)),
    // query(dbRef, orderByChild('driverId'), startAt(1201), endAt(1204)),
    // query(dbRef, orderByChild('driverId'), startAt(1204), endAt(1207)),
    (snap) => {
      const data = snap.val() || []
      console.log('🚀 ~ getDriversApi ~ data:', data)

      return data
    },
  )
}
*/
