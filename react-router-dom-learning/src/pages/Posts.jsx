import { useState, useEffect } from "react";
import Post from "../components/Post";
const url = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchPosts() {
    const res = await fetch(url);
    const data = await res.json();
    setPosts(data);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchPosts();
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <Post key={post.id} id={post.id} title={post.title} />
        ))}
    </div>
  );
}

export default Posts;
