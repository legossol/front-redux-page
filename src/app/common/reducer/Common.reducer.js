import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const SHOW_MOBILE_NAVIGATION_MENU = "SHOW_MOBILE_NAVIGATION_MENU";
 
const HIDE_MOBILE_NAVIGATION_MENU = "HIDE_MOBILE_NAVIGATION_MENU";

export const showMobileNavigationMenu =() =>{
    return {
        type: SHOW_MOBILE_NAVIGATION_MENU,
      };
}
export const hideMobileNavigationMenu=() =>{
    return {
      type: HIDE_MOBILE_NAVIGATION_MENU,
    };
  }
export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
      case SHOW_MOBILE_NAVIGATION_MENU:
        return { ...state, visibleMobileMenu: true };
      case HIDE_MOBILE_NAVIGATION_MENU:
        return { ...state, visibleMobileMenu: false };
      default:
        return state;
    }
  };
  