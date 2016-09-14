const firebase = require('firebase')

const config = {
  apiKey: 'AIzaSyB1wm8byvmgfBB7QBKEx6JSgBt-Pi_UkFI',
  authDomain: 'contact-book-d01f2.firebaseapp.com',
  databaseURL: 'https://contact-book-d01f2.firebaseio.com',
  storageBucket: 'contact-book-d01f2.appspot.com'
}
const Firebase = firebase.initializeApp(config)
const fireDB = Firebase.database().ref('contacts')

// Connect to Firebase Ref and dispatch updates to app on changes
export function connect (callback) {
  fireDB.on('value', data => callback(addKeys(data)))
}

const addKeys = (data) => {
  const dataWithKeys = []
  data.forEach((row) => {
    const item = Object.assign({}, row.val())
    item.key = row.key
    dataWithKeys.push(item)
  })
  return dataWithKeys
}

export function removeContact (key) {
  updateItem(key, { archive: 'y' })
}

export function reOpenContact (key) {
  updateItem(key, { archive: 'n' })
}

export function updateItem (key, changes) {
  const ref = fireDB.child(key)
  ref.update(changes)
}
