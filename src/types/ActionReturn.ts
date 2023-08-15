import { readBrowserWidth } from "../redux/actions/browserWidthAction";
import { setIsHamburgerClick } from "../redux/actions/isHamburgerClickAction";

export type ReadBrowserWidthAction = 
    ReturnType<typeof readBrowserWidth>;

export type SetIsHamburgerClickAction = 
    ReturnType<typeof setIsHamburgerClick>;