import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HdVx7GwZEaH5JVh0j5mSh6bwTYCmFN50iYTpTTtqZLjRYLyi0i9M5ZRmOcMXNU2TGN6XhZAS5YMBsUBZs6ZmIkO00KEZ8tkIo";

  return (
    <StripeCheckout
      label="Pay Now"
      name="Local Giver LLC"
      billingAddress
      shippingAddress
      image="https://www.flaticon.com/svg/static/icons/svg/2618/2618489.svg"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={(token) => {
        console.log(token);
        alert("Payment Succesful");
      }}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
