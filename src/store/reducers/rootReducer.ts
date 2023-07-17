import { combineReducers } from 'redux'
import usersReducer from "./userReducer"
import threadReducer from './threadReducer'
import commentReducer from './commentreducer'

const rootReducer = combineReducers({ usersReducer, threadReducer, commentReducer })
export default rootReducer
