
import {applyMiddleware, legacy_createStore,combineReducers  } from "redux";
import thunk from "redux-thunk"
import {reducer as AuthReducer}  from "./AuthReducer/reducer";
// import {reducer as AppReducer} from './AppReducer/reducer'

 const rootReducer=combineReducers({AuthReducer, AppReducer})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}