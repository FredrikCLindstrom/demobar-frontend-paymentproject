import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React, {useEffect, useState} from "react"
import PaymentForm from "./PaymentForm"
import useFetch from "./useFetch";
import NavMain from "./NavMain";

const PUBLIC_KEY = "pk_test_51L1vP1ESVXEorvycwqVtHcrDbofPgeiwchfT9EwnaGoxTziloxpBWobd0jfx5dklApXt4ojlqcTHr3Zj1oZA6eya00I96n4MHM"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(props) {

	const [success, setSuccess ] = useState(false)
	useEffect(()=>{
		postNew(url)
		orderSent()
	},[])

	const {post, loading} = useFetch("");
	const url = "http://localhost:8081/api/printReceipt"
	const[orderDisplay, setOrdersDisplay]=useState([])

	function postNew(url) {
		let newList=[]
		props.orderList.forEach(item=>{
			newList.push(item.item.id)
		})
		post(url, newList) // UUID?
			.catch(error => console.log(error));
	}
	function orderSent() {

		postNew(url)
		console.log("here now")
		setOrdersDisplay(props.orderList)
		props.setOrderList([]);
		props.setShow(false)
		console.log("Order sent");
	}
	return (
		<>
		<NavMain/>
		<Elements stripe={stripeTestPromise}>
			<PaymentForm
				success={success}
				setSuccess={setSuccess}
				totalPrice={props.totalPrice}
				orderDisplay={orderDisplay}
				setOrderDisplay={setOrdersDisplay}
			/>

			{!success && <h2 className="totalPriceCheckout">price to pay {props.totalPrice}</h2>}
			{success && <h2 className="totalPriceCheckout">your order: </h2>}
			{orderDisplay.map((item, index)=>{
				return(
					<li className="Menu--listOfItems" key={index}>
						<p>{`${item.item.nameOfItem}   ${item.item.price} kr`}</p>
					</li>
				)
			})}

		</Elements>
			</>
	)
}
