import { getDatabase, ref, onValue } from 'firebase/database'

import { db } from './firebaseConfig'

export const getTotalDriversApi = async () => {
  const database = getDatabase(db)
  onValue(ref(database, '/drivers'), (snapshot) => {
    const data = snapshot.val() || {}
    return data
  })
}
