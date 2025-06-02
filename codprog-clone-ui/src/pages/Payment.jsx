import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { getUser } from "../utils/getUser";
import {
  BASE_URL,
  STRIPE_PUBLISHABLE_KEY,
  SUPABASE_API_KEY,
} from "../constants";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { requireAuth } from "../utils/requireAuth";
import isTokenExpired from "../utils/isTokenExpired";
import refreshToken from "../utils/refreshToken";
import axios from "axios";
import styles from "./Payment.module.css";
import Container from "../components/UI/Container";

export async function paymentLoader({ request, params }) {
  const pathname = new URL(request.url).pathname;
  await requireAuth({ redirectTo: pathname });
  let { access_token, expires_at } = await getUser();
  if (isTokenExpired(expires_at)) {
    console.log("Token Expired :(");
    access_token = await refreshToken();
  }
  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}functions/v1/create-stripe-payment`,
        { course_id: params.courseID },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
            apiKey: SUPABASE_API_KEY,
          },
        }
      );

      return { clientSecret: data.clientSecret, error: null };
    } catch (error) {
      return {
        error: error?.response?.data?.error || error.message,
        clientSecret: null,
      };
    }
  };
  return await createPaymentIntent();
}
function Payment() {
  const { error, clientSecret } = useLoaderData();
  const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  const [searchParams] = useSearchParams();
  const courseName = searchParams.get("name");
  const amount = searchParams.get("amount");

  if (error) {
    return (
      <>
        <Container>
          <div className={styles.payment_container}>
            <h1 className={styles.error_message}>{error}</h1>
          </div>
        </Container>
      </>
    );
  }
  return (
    <>
      <Container>
        <div className={styles.payment_container}>
          <h1 className={styles.title}>
            Buy {courseName} now at <span>₹{amount}</span> with 2 Years access!
          </h1>
          {clientSecret && stripePromise && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
      </Container>
    </>
  );
}

export default Payment;
