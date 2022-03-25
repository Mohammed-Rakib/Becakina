import React, { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import PaymentMethods from "./PaymentMethods";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IeD1mEcf4uBSr0U2HuB6a6jG8EKA3K6NybMeDbw1lFutmhhWSe3u9DyS1F6qsZe1QtQjbbpsT6OfTz5Z5FzFPcL00jBP8JiZ2"
);

const CheckoutLayout = () => {
  const [isFullFilled, setIsFullFilled] = useState(false);
  const [checkoutDetails, setCheckoutDetails] = useState({});
  console.log(checkoutDetails, isFullFilled);

  return (
    <section className="md:w-9/12 w-11/12 mx-auto py-10">
      {isFullFilled ? (
        <>
          <Elements stripe={stripePromise}>
            {" "}
            <PaymentMethods checkoutDetails={checkoutDetails} />
          </Elements>
        </>
      ) : (
        <>
          <CheckoutForm
            setIsFullFilled={setIsFullFilled}
            setCheckoutDetails={setCheckoutDetails}
          />
        </>
      )}
    </section>
  );
};

export default CheckoutLayout;
