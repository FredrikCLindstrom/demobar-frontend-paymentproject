import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51L1vP1ESVXEorvycwqVtHcrDbofPgeiwchfT9EwnaGoxTziloxpBWobd0jfx5dklApXt4ojlqcTHr3Zj1oZA6eya00I96n4MHM"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(props) {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
			{props.totalPrice}
		</Elements>
	)
}
