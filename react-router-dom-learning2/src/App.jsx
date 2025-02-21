import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, About, Contact, Posts, PostDetail, Error, Login } from "./pages";
import RootLayout from "./Layout/RootLayout";
import { useAuth } from "./context/AuthProvider";
import { loader as fetchPosts } from "./pages/Posts";
import { loader as fetchSingalPost } from "./pages/PostDetail";

function App() {
  const { isLoggedIn } = useAuth();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout />}
        errorElement={<h1>Someting went wrong !!!!</h1>}
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="posts"
          loader={(args) => {
            return fetchPosts(args, { isLoggedIn: isLoggedIn });
          }}
          errorElement={<Error />}
          element={<Posts />}
        />
        <Route
          path="posts/:id"
          loader={(args) => {
            return fetchSingalPost(args, { isLoggedIn: isLoggedIn });
          }}
          errorElement={<Error />}
          element={<PostDetail />}
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
