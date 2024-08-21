import React, { useEffect, useState } from 'react'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { useParams } from 'react-router-dom'
import apiClient from '../apiClient'
import { Box } from '@chakra-ui/react'
import { CheckoutForm } from '../components/checkoutForm'

const stripePromise = loadStripe("pk_test_51Pp4PLSGHPTtntpzOf1oOe1XcPEytmLuMnRkJhFE2sMX0rqjIu9XDilb9jAsptiOibK131o2rg3R1Y6Dy7ZP9zzk00So01t9nF")

export const Checkout = () => {
    const [orderData, setOrderData] = useState({})
    const { carId } = useParams()

    useEffect(() => {
        const token = localStorage.getItem('token')

        apiClient.post(`/api/orders/${carId}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}` // Include the authorization token in the headers
                }
            }
        )
            .then((res) => setOrderData(res.data))
            .catch(error => console.log(error))
    }, [])

    const appearance = {
        theme: 'stripe'
    }

    const clientSecret = orderData.clientSecret

    const options = {
        clientSecret,
        appearance
    };

    return (
        <Box>
            {orderData.clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm/>
                </Elements>
            )}
        </Box>
    )
}
