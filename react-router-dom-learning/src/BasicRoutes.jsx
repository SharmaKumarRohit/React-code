// step 1
// import four things

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// step 2 : create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<h1>Home page</h1>} />
      <Route path="/about" element={<h1>About page</h1>} />
      <Route path="/contact" element={<h1>Contact page</h1>} />
      <Route path="/posts" element={<h1>Posts page</h1>} />
      <Route path="*" element={<h1>Error page</h1>} />
    </Route>
  )
);

function BasicRoutes() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default BasicRoutes;
