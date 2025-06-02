import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import styles from "./CheckoutForm.module.css";
import errorWarning from "../assets/error-warning-line.png";
import SecondaryLoader from "../components/UI/SecondaryLoader";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/thankyou`,
      },
    });
    console.log(error);
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      {/* Show any error or success messages */}
      {message && (
        <div id="payment-message" className={styles.payment_message}>
          <img src={errorWarning} alt="Warning" />
          <p>{message}</p>
        </div>
      )}
      <button
        disabled={isProcessing || !stripe || !elements}
        id="submit"
        className={styles.payment_btn}
      >
        <span id="button-text">
          {isProcessing ? (
            <SecondaryLoader>Processing...</SecondaryLoader>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
    </form>
  );
}
