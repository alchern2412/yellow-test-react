import { combineReducers } from 'redux'
import jog from './jog'
import auth from './auth'

export default combineReducers({
    auth,
    jog
})