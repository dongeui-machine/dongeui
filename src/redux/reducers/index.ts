import { combineReducers } from "redux";
import { browserWidthReducer } from "./browserWidthReducer";

const rootReducer = combineReducers ({
    browserWidthReducer,
});

export default rootReducer;