import Immutable from 'immutable'
import * as types from '../constants/typeActions'

const initialState = {
  isLoading: false
}

export default function reducer (state = Immutable.Map(initialState), action) {
  switch (action.type) {
    case types.LOADING:
      return state.set('isLoading', action.isLoading)
    default:
      break
  }
  return state
}
