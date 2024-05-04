import { createSlice } from "@reduxjs/toolkit";
// slice in redux code is responsible for handling actions and updating data for given slice.
import { MENU_ITEMS } from "@/constants";
const initialState ={
activeMenuItem:MENU_ITEMS.PENCIL,
actionMenuItem: null 
}
export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuItemClick: (state,action )=> {
            state.activeMenuItem= action.payload

        },
        actionItemCLick :(state,action) => {
            state.activeMenuItem= action.payload   
        }
    }
})
export const {menuItemClick,actionItemCLick} =menuSlice.actions

export default menuSlice.reducer