Step 1 
Create folder *redux* then file *store.js* & *userSlice.js*
Step 2
userSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
        id:1983,
        name:'Zaher'
    }]
const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
    }  
})
export const selectAllUsers = (state)=>state.users
export default userSlice.reducer
Step 3
store.js
import userReducer from './userSlice';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        users:userReducer,
    },
});
export default store;
Step 4
_app.js
import {Provider} from 'react-redux'
import store from '@/redux/store'
   <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
Step 5
index.js
import { selectAllUsers } from "../redux/userSlice";
import { useSelector } from "react-redux";
import PostForm from "../components/postForm";
import PostList from "../components/postList";

function Home() {
const users = useSelector(selectAllUsers);
useEffect(() => {}, []);

  return (
    <div>
    <PostForm users={users} />
    <PostList posts={posts}  />
    </div>
  );
}

export default Home;

Step 6
postForm.jsx
import {PostAdd} from "../redux/postSlice";
import {useDispatch} from "react-redux";

//to excute the function
const dispatch = useDispatch();
const onSavePostClicked = (e) => {
    e.preventDefault();

    const data = {
      id: nanoid(8),
      title: title,
      content: content,
      userId: userId,
      date: new Date().toISOString(),
    };
    dispatch(PostAdd(data));
  };
  Step 7
  postList.jsx
  posts.map