import { SET_IS_HAMBURGER_CLICK } from "../actions/isHamburgerClickAction";
import { SetIsHamburgerClickAction } from "../../types/ActionReturn";
import { isHamburgerClickInitialState } from "./initialState";

export const isHamburgerClickReducer = (state=isHamburgerClickInitialState, action: SetIsHamburgerClickAction) => {
    switch(action.type) {
        case SET_IS_HAMBURGER_CLICK: 
            return action.payload;
        default: return state;
    }
}