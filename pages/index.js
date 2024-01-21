import { useEffect, useState } from "react";

import { selectAllUsers } from "../redux/userSlice";
import { selectAllPosts } from "../redux/postSlice";
import { useSelector } from "react-redux";
import TestForm from '../components/testForm'

//import PostForm from "../components/postForm";
//import PostList from "../components/postList";

function Home() {
  const [count, setCount] = useState(0);

  const users = useSelector(selectAllUsers);
  const posts = useSelector(selectAllPosts);

  // get AllData from test branch
  //const {name ,age} = useSelector((state)=>state.test)
  const testData = useSelector((state) => state.test);
  console.log("TESTDATA-->", testData);

  useEffect(() => {}, []);

  return (
    <div>
      <TestForm />
      {/* {users?.length} */}

      {/* <PostForm users={users} />

      <PostList posts={posts}  /> */}
    </div>
  );
}

export default Home;
