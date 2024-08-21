import React, { useEffect, useState } from 'react'
import apiClient from '../apiClient'
import { Box, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useStripe } from '@stripe/react-stripe-js'
import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'

const stripe = await loadStripe("pk_test_51Pp4PLSGHPTtntpzOf1oOe1XcPEytmLuMnRkJhFE2sMX0rqjIu9XDilb9jAsptiOibK131o2rg3R1Y6Dy7ZP9zzk00So01t9nF")

export const PaymentSuccessfull = () => {
    const [order, setOrder] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true)

            const clientSecret = new URLSearchParams(window.location.search).get(
                "payment_intent_client_secret"
            );

            const paymentIntent = await stripe.retrievePaymentIntent(clientSecret).then(async ({ paymentIntent }) => {
                switch (paymentIntent.status) {
                    case "succeeded":
                        setMessage("Payment succeeded!");
                        await fetchOrderDetails(paymentIntent.id)
                        break
                    case "processing":
                        setMessage("Your payment is processing.");
                        break;
                    case "requires_payment_method":
                        setMessage("Your payment was not successful, please try again.");
                        break;
                    default:
                        setMessage("Something went wrong.");
                        break;
                }
            })
            setIsLoading(false)
        }
        fetchData()

    }, [])

    const fetchOrderDetails = async (paymentIntentId) => {
        const token = localStorage.getItem('token')
        await apiClient.get(`/api/orders/payment/${paymentIntentId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        .then((res) => {
            setOrder(res.data)
        })
        .catch(error=>console.log(error))
    }

    if (isLoading) {
        return (
            <Box margin='40px auto'>
                <Text pt='100px' textAlign='center' fontSize='xl'>...Loading</Text>
            </Box>
        )
    }

    return (
        <Box margin='40px auto'>
            <Text pt='100px' textAlign='center' fontSize='xl'>{order && JSON.stringify(order)}</Text>
        </Box>
    )
}
