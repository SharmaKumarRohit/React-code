import { SIGNUP_URL, SUPABASE_API_KEY } from "../constants";
import axios from "axios";
import {
  Form,
  useActionData,
  redirect,
  Link,
  useNavigation,
} from "react-router-dom";
import { getUser } from "../utils/getUser";
import Container from "../components/UI/Container";
import formStyle from "./FormStyle.module.css";
import openEye from "../assets/eye-line.png";
import closeEye from "../assets/eye-off-line.png";
import { togglePassword } from "../utils/togglePassword";
import errorWarning from "../assets/error-warning-line.png";
import success from "../assets/checkbox-circle-line.png";
import SecondaryLoader from "../components/UI/SecondaryLoader";

export async function signupLoader() {
  const user = await getUser();
  if (user === null) {
    return null;
  } else {
    return redirect("/");
  }
}
export async function signupAction({ request }) {
  const formData = await request.formData();
  const newUser = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const confirmPassword = formData.get("confirm-password");
  if (newUser.password !== confirmPassword) {
    return { error: "Must match the password" };
  }
  try {
    const response = await axios.post(SIGNUP_URL, newUser, {
      headers: {
        apikey: SUPABASE_API_KEY,
        "Content-Type": "application/json",
      },
    });
    const data = response.data;
    if (data.identities && data.identities.length === 0) {
      return { error: "user already exists" };
    }
    return { message: "confirm your email and login" };
  } catch (error) {
    return { error: error.message };
  }
}
function Signup() {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const { showPassword, togglePass } = togglePassword();
  return (
    <Container>
      <Form action="/signup" method="POST">
        <section className={formStyle.form_container}>
          <div className={formStyle.form_message}>
            <h2>Create Your Account</h2>
            <p>Enter your details and start learning</p>
          </div>
          {data?.error && (
            <div className={formStyle.errorMessage}>
              <img src={errorWarning} alt="warning" />
              <p>{data.error}</p>
            </div>
          )}
          {data?.message && (
            <div className={formStyle.successMessage}>
              <img src={success} alt="warning" />
              <p>{data.message}</p>
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
            <div className={formStyle.input_group}>
              <input
                type={showPassword ? "text" : "password"}
                name="confirm-password"
                id="confirm-password"
                required
              />
              <label htmlFor="confirm-password">Confirm Password</label>
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
                <SecondaryLoader>SigningUp...</SecondaryLoader>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
          <div className={formStyle.account}>
            <p>
              Already have an account ?{" "}
              <span>
                <Link to="/login">Log in</Link>
              </span>
            </p>
          </div>
        </section>
      </Form>
    </Container>
  );
}

export default Signup;
