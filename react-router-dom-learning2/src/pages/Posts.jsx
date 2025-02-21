import Post from "../components/Post";
import { useLoaderData, redirect } from "react-router-dom";

// Component mount --> fetch
// loaders
// fetch --> component mount

// loaders
// 1. provide loaders function to route
// 2. useLoaderData and get data

export async function loader({ request }, { isLoggedIn }) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  if (!isLoggedIn) {
    return redirect(`/login?redirectTo=${pathname}`);
  }
  // if user is not logged in then redirect to login page
  const endPoint = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(endPoint);
  if (!res.ok) {
    throw new Error("Oops! Someting went wrong");
  }
  const data = await res.json();
  return data;
}

function Posts() {
  const posts = useLoaderData();
  return (
    <div>
      <h1>Posts</h1>
      {posts &&
        posts.map((post) => (
          <Post key={post.id} id={post.id} title={post.title} />
        ))}
    </div>
  );
}

export default Posts;
