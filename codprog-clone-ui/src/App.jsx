import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import {
  Home,
  Login,
  MyCourses,
  Signup,
  CourseDetail,
  Payment,
  Thankyou,
  MyCourseVideos,
  Error,
} from "./pages";
import { loginAction, loginLoader } from "./pages/Login";
import { signupAction, signupLoader } from "./pages/Signup";
import { myCourseLoader } from "./pages/MyCourses";
import { Logout } from "./pages/Logout";
import { getUser } from "./utils/getUser";
import { homeLoader } from "./pages/Home";
import { courseDetailLoader } from "./pages/CourseDetail";
import { paymentLoader } from "./pages/Payment";
import { myCourseVideosLoader } from "./pages/MyCourseVideos";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      loader={getUser}
      id="parentRoute"
      errorElement={<Error />}
    >
      <Route index element={<Home />} loader={homeLoader} />
      <Route
        path="login"
        element={<Login />}
        action={loginAction}
        loader={loginLoader}
      />
      <Route path="logout" action={Logout} />
      <Route
        path="my-courses"
        element={<MyCourses />}
        loader={myCourseLoader}
      />
      <Route
        path="signup"
        element={<Signup />}
        action={signupAction}
        loader={signupLoader}
      />
      <Route
        path="course-detail/:id"
        element={<CourseDetail />}
        loader={courseDetailLoader}
      />
      <Route
        path="payment/:courseID"
        element={<Payment />}
        loader={paymentLoader}
      />
      <Route
        path="my-courses/:courseID"
        element={<MyCourseVideos />}
        loader={myCourseVideosLoader}
      />
      <Route path="thankyou" element={<Thankyou />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
