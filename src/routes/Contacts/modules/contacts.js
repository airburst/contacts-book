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

// export const doubleAsync = () => {
//   return (dispatch, getState) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         dispatch(setContacts(getState().contacts))
//         resolve()
//       }, 200)
//     })
//   }
// }

export const actions = {
  setContacts
  // ,doubleAsync
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
