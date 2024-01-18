import { createSlice } from "@reduxjs/toolkit";

const initialState = [

    {
        id:1983,
        name:'Zaher'
    },
    {
        id:1985,
        name:'Salam'
    },
    {
        id:2012,
        name:'Qamar'
    },
    {
        id:2016,
        name:'Omar'
    },
]
// initialState is array of users    create slice m2assas el feri3 branch manager
const userSlice = createSlice({

    name:'users',
    initialState,
    reducers:{
        //functions add user for array del user
    }  
})

//array of users 
export const selectAllUsers = (state)=>state.users

export default userSlice.reducer