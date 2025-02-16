import React, { useEffect, useState } from 'react'
import apiClient from '../apiClient'
import { Box, Card, HStack, Img, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useStripe } from '@stripe/react-stripe-js'
import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'

const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PRIVATE_KEY)

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
                console.log(res.data)
            })
            .catch(error => console.log(error))
    }

    if (isLoading) {
        return (
            <Box margin='40px auto'>
                <Text pt='100px' textAlign='center' fontSize='xl'>...Loading</Text>
            </Box>
        )
    }

    return (
        <Box textAlign='center'>
            {order &&

                <Card textAlign='center' m='auto' w='70%' bg='#e8f4e4' p='100px' marginY='100px'>
                    <Text color='green' fontSize='2xl' mb='20px'>Your order is successfull, Thank you!</Text>
                    <Text><span style={{fontWeight: '600'}}>Order Id:</span> {order._id}</Text>
                    <Text><span style={{fontWeight: '600'}}>Order Total:</span> Rs. {order.car_id.price} </Text>
                    <Text><span style={{fontWeight: '600'}}>Delivered by:</span>: Next week</Text>
                </Card>
            }
        </Box>
    )
}
