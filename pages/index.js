import { useEffect, useState } from "react";

import { selectAllUsers } from "../redux/userSlice";
import { selectAllPosts } from "../redux/postSlice";
import { useSelector } from "react-redux";

import PostForm from "../components/postForm";
import PostList from "../components/postList";


function Home() {
  const [count, setCount] = useState(0);

  const users = useSelector(selectAllUsers);
  const posts = useSelector(selectAllPosts);

  useEffect(() => {}, []);

  return (
    <div>
      {posts?.length}
      {/* {users?.length} */}

      <PostForm users={users} />

      <PostList />
    </div>
  );
}

export default Home;
