import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value :0
}
export const counterSlice = createSlice({
    name :'counter',
    initialState: initialState,
    reducers: {
        increament:(state,action)=>{
            state.value = state.value +1;
            
        },
        decreament:(state,action)=>{
            state.value = state.value -1;

        },
        increamentByAmmount:(state,action)=>{
            state.value = state.value +action.payload;

        },
        decreamentByAmmount:(state,action)=>{
            state.value = state.value - action.payload;

        },
    }
})


export const {increament,decreament,increamentByAmmount} = counterSlice.actions;

export default counterSlice.reducer