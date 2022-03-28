import { useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js';

const PaypalCheckoutButton = ({ product }) => {
  const [paidFor, setPaidFor] = useState(false);

  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    setPaidFor(true);
  }

  if (paidFor) {
    alert("Thank you for your donation")
  }

  if (error) {
    alert(error)
  }

  return <PayPalButtons
    style={{
      color: "silver",
      layout: "horizontal",
      height: 48,
      tagline: false,
      shape: 'pill'
    }}
    onClick={(data, actions) => {
      const hasAlreadyBoughtToys = false;

      if (hasAlreadyBoughtToys) {
        setError("Your already bought these toys")

        return actions.reject()

      } else {
        return actions.resolve()
      }
    }}
    createOrder={(data, actions) => {
      return actions.order.create({
        purchase_units: [{
          desc: product.desc,
          amount: {
            value: product.price,
            currency_code: 'USD'
          }
        }
        ]
      })
    }}
    onApprove={async (data, actions) => {
      const order = await actions.order.capture();
      console.log("order", order)

      handleApprove(data.orderID);
    }}
    onCancel={() => {

    }}
    onError={(err) => {
      setError(err)
      console.error("Paypal Checkout onError", err)
    }}
  />

};

export default PaypalCheckoutButton;