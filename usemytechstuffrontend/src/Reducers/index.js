import { combineReducers } from "redux";
import ownerReducer from './ownerReducer';
import renterReducer from './renterReducer';

const rootReducer = combineReducers({
    owner: ownerReducer,
    renter: renterReducer,
});
export default rootReducer;
