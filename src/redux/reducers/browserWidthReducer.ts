import { READ_BROWSER_WIDTH } from "../actions/browserWidthAction"
import { ReadBrowserWidthAction } from "../../types/ActionReturn";
import { browserWidthInitialState } from "./initialState"

export const browserWidthReducer = (state=browserWidthInitialState, action: ReadBrowserWidthAction) => {
    switch (action.type) {
        case READ_BROWSER_WIDTH: 
            return { width: window.innerWidth };
        default: return state;
    }
}