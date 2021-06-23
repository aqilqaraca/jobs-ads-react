import { combineReducers } from "redux"
import { jobsReducer } from "./reducers/reducers"


export const rootReducer = combineReducers({
    jobs : jobsReducer
})
