import { combineReducers } from 'redux'
import { threadReducer } from './threadReducer'

const rootReducer = combineReducers({ threadReducer })
export default rootReducer
