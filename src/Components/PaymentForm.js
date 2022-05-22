import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import "../css/PaymentForm.css"
import {Link} from "react-router-dom";



const cardStyle = {
    hidePostalCode: true,
    style: {
        base: {
            color: "#32325d",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#32325d"
            }
        },
        invalid: {
            fontFamily: 'Arial, sans-serif',
            color: "#fa755a",
            iconColor: "#fa755a"
        }
    }
};

export default function PaymentForm(props) {
    //const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    console.log("Stripe test CC, copy paste into input")
    console.log("4242424242424242")



    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: props.totalPrice,
                id

            })

            if(response.data.success) {
                console.log("Successful payment")
                props.setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!props.success ?

        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={cardStyle}/>
                </div>
            </fieldset>
            <button className="buttonPay">Pay {props.totalPrice}</button>
        </form>
        :
       <div>
           <h2 className="messagePay">Youre waiter will be out with your order shortly</h2>
       </div>

        }
            
        </>
    )
}
