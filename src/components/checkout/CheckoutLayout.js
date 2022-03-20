import React, { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import PaymentMethods from "./PaymentMethods";

const CheckoutLayout = () => {
  const [isFullFilled, setIsFullFilled] = useState(false);
  const [checkoutDetails, setCheckoutDetails] = useState({});
  console.log(checkoutDetails, isFullFilled);

  return (
    <section className="md:w-9/12 w-11/12 mx-auto py-10">
      {isFullFilled ? (
        <>
          <PaymentMethods />
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
