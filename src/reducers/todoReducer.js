import _ from 'lodash'
import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  FETCH_TODO,
  FETCH_TODOS
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODO:
      return { ...state, [action.payload.id]: action.payload }
    case ADD_TODO:
      return { ...state, [action.payload.id]: action.payload }
    case EDIT_TODO:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_TODO:
      return _.omit(state, action.payload)
    case FETCH_TODOS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    default:
      return state
  }
}
