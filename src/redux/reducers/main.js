import { combineReducers } from "redux";

import { cartReducer, compareReducer, wishListReducer } from "./reducer";

const rootReducer = combineReducers({
    cartReducer,
    wishList: wishListReducer,
    compare: compareReducer,
});

export default rootReducer;