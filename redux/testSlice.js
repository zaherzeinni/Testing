import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: 0,
  email: ""
};

// users Management
const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    // functions

    setName: (state, action) => {
      //  chnage name from input
      state.name = action.payload;
    },
    setAge: (state, action) => {
        //  change age from input
        //state.age = action.payload;    method two
        state.age = state.age+10;
      },
      setEmail: (state, action) => {
        state.email = action.payload;
      },
  },
});

export const { setName,setAge,setEmail } = testSlice.actions;
export default testSlice.reducer;
