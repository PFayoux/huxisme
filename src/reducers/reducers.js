import Immutable from 'immutable'
import * as types from '../constants/typeActions'

const initialState = {
}

export default function reducer (state = Immutable.Map(initialState), action) {
  switch (action.type) {
    case types.LOADING:
      break

    default:
      break
  }
  return state
}
