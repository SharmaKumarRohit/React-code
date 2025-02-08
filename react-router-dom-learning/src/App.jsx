// import BasicRoutes from "./BasicRoutes";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, About, Contact, Posts, PostDetail, Error, Login } from "./pages";
import RootLayout from "./Layouts/RootLayout";
import RequireAuth from "./components/RequireAuth";
import AuthProvider from "./context/AuthProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* This is my parent(RootLayout) route*/}
      <Route index element={<Home />} />
      {/* This is my child(Home, About, Contact, Posts, Error) route*/}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="posts"
        element={
          <RequireAuth>
            <Posts />
          </RequireAuth>
        }
      />
      <Route
        path="posts/:id"
        element={
          <RequireAuth>
            <PostDetail />
          </RequireAuth>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <div>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
