import {
  getDatabase,
  ref,
  onValue,
  query,
  orderByChild,
  limitToFirst,
  startAt,
  endAt,
} from 'firebase/database'

import { db } from './firebaseConfig'

const database = getDatabase(db)
const dbRef = ref(database, '/drivers')

const getTotalDriversApi = () => {
  onValue(dbRef, (snap) => {
    const data = snap.val() || []
    console.log('🚀 ~ getTotalDriversApi ~ data:', data)

    return data
  })
}

const getDriversApi = () => {
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

export { getTotalDriversApi, getDriversApi }
