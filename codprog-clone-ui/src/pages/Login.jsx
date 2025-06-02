import {
  Form,
  Link,
  redirect,
  useActionData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import axios from "axios";
import { LOGIN_URL, SUPABASE_API_KEY } from "../constants";
import { getUser } from "../utils/getUser";
import Container from "../components/UI/Container";
import formStyle from "./FormStyle.module.css";
import openEye from "../assets/eye-line.png";
import closeEye from "../assets/eye-off-line.png";
import { togglePassword } from "../utils/togglePassword";
import errorWarning from "../assets/error-warning-line.png";
import SecondaryLoader from "../components/UI/SecondaryLoader";

// Kishi bhi component ka mount hone ka phale mujhee kuch work karna hai, esh ka liya mai loader function ka use karuga.
export async function loginLoader() {
  const user = await getUser();
  if (user === null) {
    return null;
  } else {
    return redirect("/");
  }
}
// get
// post, put, patch, delete
export async function loginAction({ request }) {
  const redirectTo = new URL(request.url).searchParams.get("redirectTo") || "/";
  const data = await request.formData();
  const credentials = {
    email: data.get("email"),
    password: data.get("password"),
  };
  // request
  try {
    const response = await axios.post(LOGIN_URL, JSON.stringify(credentials), {
      headers: {
        apikey: SUPABASE_API_KEY,
        "Content-Type": "application/json",
      },
    });
    const {
      access_token,
      refresh_token,
      expires_at,
      user: { id: user_id },
    } = response.data;
    const user = { access_token, refresh_token, expires_at, user_id };
    localStorage.setItem("user", JSON.stringify(user));
    return redirect(redirectTo);
  } catch (error) {
    localStorage.removeItem("user");
    if (error.response.status === 400) {
      return { error: "Incorrect email or password" };
    } else {
      return { error: error?.response?.data?.message || error.message };
    }
  }
  // return null; // Always return some value, otherwise throw error
}
function Login() {
  const data = useActionData();
  const location = useLocation();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const loginURL = location.pathname + location.search;
  const { showPassword, togglePass } = togglePassword();
  return (
    <>
      <Form method="POST" action={loginURL} replace>
        <Container>
          <section className={formStyle.form_container}>
            <div className={formStyle.form_message}>
              <h2>Welcome Back</h2>
              <p>Enter your details and continue learning</p>
            </div>
            {data && data?.error && (
              <div className={formStyle.errorMessage}>
                <img src={errorWarning} alt="Warning" />
                <p>{data?.error}</p>
              </div>
            )}
            <div>
              <div className={formStyle.input_group}>
                <input type="email" name="email" id="email" required />
                <label htmlFor="email">Email</label>
              </div>
              <div className={formStyle.input_group}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                />
                <label htmlFor="password">Password</label>
                <img
                  src={showPassword ? openEye : closeEye}
                  className={formStyle.toggle}
                  alt={showPassword ? "visible password" : "hide password"}
                  onClick={togglePass}
                />
              </div>
              <button
                type="submit"
                className={formStyle.input_btn}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <SecondaryLoader>Logging...</SecondaryLoader>
                ) : (
                  "Login"
                )}
              </button>
            </div>
            <div className={formStyle.account}>
              <p>
                Don't have an account ?{" "}
                <span>
                  <Link to="/signup">Sign Up</Link>
                </span>
              </p>
            </div>
          </section>
        </Container>
      </Form>
    </>
  );
}

export default Login;
