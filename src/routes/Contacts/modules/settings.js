// ------------------------------------
// Constants
// ------------------------------------
export const SET_FILTER = 'SET_FILTER'
export const SHOW_REOPEN_UNDO = 'SHOW_REOPEN_UNDO'
export const HIDE_REOPEN_UNDO = 'HIDE_REOPEN_UNDO'

// ------------------------------------
// Actions
// ------------------------------------
export function setFilter (value = '') {
  return {
    type: SET_FILTER,
    payload: value
  }
}

export function showReOpenUndo (key) {
  return {
    type: SHOW_REOPEN_UNDO,
    payload: key
  }
}

export function hideReOpenUndo () {
  return {
    type: HIDE_REOPEN_UNDO
  }
}

export const actions = {
  setFilter,
  showReOpenUndo,
  hideReOpenUndo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_FILTER]: (state, action) => action.payload,
  [SHOW_REOPEN_UNDO]: (state, action) => {
    return Object.assign({}, state, { isUndoShown: true, lastKey: action.payload })
  },
  [HIDE_REOPEN_UNDO]: (state, action) => {
    return Object.assign({}, state, { isUndoShown: false, lastKey: undefined })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  filterValue: '',
  isUndoShown: false,
  lastKey: undefined
}
export default function settingsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
