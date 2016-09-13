// ------------------------------------
// Constants
// ------------------------------------
export const SET_CONTACTS = 'SET_CONTACTS'

// ------------------------------------
// Actions
// ------------------------------------
export function setContacts (value = []) {
  return {
    type: SET_CONTACTS,
    payload: value
  }
}

export const actions = {
  setContacts
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_CONTACTS]: (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function contactsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
