import { combineReducers } from "redux";
import { browserWidthReducer } from "./browserWidthReducer";
import { isHamburgerClickReducer } from "./isHamburgerClickReducer";

const rootReducer = combineReducers ({
    browserWidthReducer,
    isHamburgerClickReducer,
});

export default rootReducer;