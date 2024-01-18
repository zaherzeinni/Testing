import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { sub } from "date-fns";


const initialState = [
  {
    id: nanoid(8),
    title: "title1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a. Elementum eu facilisis sed odio morbi. Erat pellentesque adipiscing",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },

  {
    id: nanoid(8),
    title: "title2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a. Elementum eu facilisis sed odio morbi. Erat pellentesque adipiscing",
    date: sub(new Date(), { minutes: 16 }).toISOString(),
  },

  {
    id: nanoid(8),
    title: "title3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a. Elementum eu facilisis sed odio morbi. Erat pellentesque adipiscing",
    date: sub(new Date(), { minutes: 22 }).toISOString(),
  },

  {
    id: nanoid(8),
    title: "title4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a. Elementum eu facilisis sed odio morbi. Erat pellentesque adipiscing",
    date: sub(new Date(), { minutes: 30 }).toISOString(),
  },
];

// posts Management
const postSlice = createSlice({
  name: "posts",
  initialState, // []    state.posts    hayye wasaltne la hon array mobashara dakhila kil data fo2 line 5
  reducers: {
    // All functions here
    // state to access data of slices of branch manager
    PostAdd: (state, action) => {
      // data post object data sent from postForm  //dispatch(postAdd(data))

      console.log("action payload", action.payload);
        // push it in the array
      state.push(action.payload);
    },
  },
});

// array of users   state.posts testad3e data from index.js --- state.posts wasaltne la data awlayeh initialState, // []
export const selectAllPosts = (state) => state.posts;

export const { PostAdd } = postSlice.actions; // functions

export default postSlice.reducer;
