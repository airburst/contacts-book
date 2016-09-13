// ------------------------------------
// Constants
// ------------------------------------
export const SET_CONTACTS = 'SET_CONTACTS'
// export const SET_FILTER = 'SET_FILTER'

// ------------------------------------
// Actions
// ------------------------------------
export function setContacts (value = []) {
  return {
    type: SET_CONTACTS,
    payload: value
  }
}

// export function setFilter (value = '') {
//   return {
//     type: SET_FILTER,
//     payload: value
//   }
// }

export const actions = {
  setContacts
}

// const filteredContacts = (list, filter) => {
//   if (filter === '') { return list }
//   return list.filter(l => (l.fname + l.lname).indexOf(filter) > -1)
// }

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_CONTACTS]: (state, action) => action.payload
  // [SET_FILTER]: (state, action) => filteredContacts(state, action.payload)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function contactsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
