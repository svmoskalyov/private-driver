import {
  getDatabase,
  ref,
  onValue,
  query,
  orderByChild,
  limitToFirst,
  startAt,
  endAt,
  get,
} from 'firebase/database'

import { db } from './firebaseConfig'

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
