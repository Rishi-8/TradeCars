import { Button } from '@chakra-ui/react'
import { AddressElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import apiClient from '../apiClient'

export const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()

    const [message, setMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false)
        setMessage('processing payment...');
        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/payment_successfull",
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setError(true)
            setMessage(error.message);
        } else {
            console.log(error)
            setError(true)
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    return (
        <form id="payment-form" onSubmit={handleSubmit}>

            <PaymentElement id="payment-element" options={paymentElementOptions} />
            <AddressElement options={{ mode: 'shipping' }} />
            <Button mt='20px' width='100%' colorScheme='blue' isDisabled={isLoading || !stripe || !elements} type="submit">
                <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner">...Loading</div> : "Pay now"}
                </span>
            </Button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message" style={error ? {color: 'red'}: {}}>{message}</div>}
        </form>
    )
}
