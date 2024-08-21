import React, { useEffect, useState } from 'react'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { useParams } from 'react-router-dom'
import apiClient from '../apiClient'
import { Box, Card, Flex, HStack, Img, Text } from '@chakra-ui/react'
import { CheckoutForm } from '../components/checkoutForm'

const stripePromise = loadStripe("pk_test_51Pp4PLSGHPTtntpzOf1oOe1XcPEytmLuMnRkJhFE2sMX0rqjIu9XDilb9jAsptiOibK131o2rg3R1Y6Dy7ZP9zzk00So01t9nF")

export const Checkout = () => {
    const [orderData, setOrderData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const { carId } = useParams()

    useEffect(() => {
        const createIntentAndFetchCar = async() => {
            setIsLoading(true)
            const token = localStorage.getItem('token')

            await apiClient.post(`/api/orders/${carId}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}` // Include the authorization token in the headers
                    }
                }
            )
                .then((res) => setOrderData(res.data))
                .catch(error => console.log(error))
            setIsLoading(false)
        }
        createIntentAndFetchCar()
    }, [])

    const appearance = {
        theme: 'stripe'
    }

    console.log(orderData)

    const clientSecret = orderData.clientSecret

    const options = {
        clientSecret,
        appearance
    };

    return (
        <Box m='40px' mt='150px'>
            <Flex gap='40px'>
                <Card p='20px' flex='3' h='100%'>
                    {orderData.clientSecret ? (
                        <Elements options={options} stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    ) : <Text>...Loading</Text>}
                </Card>
                <Card p='20px' flex='2' h='100%'>
                    {orderData.car && <>
                        <Text mb='20px' fontSize='xl' fontWeight='700'>Order Details</Text>
                        <HStack alignItems='start'>
                            <Box flex='3'>
                                <Img src='https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' borderRadius='10px' />
                            </Box>
                            <Box flex='2'>
                                <Text fontWeight='600'>{orderData.car.make} {orderData.car.model}</Text>
                                <Text>{orderData.car.fuelType} . {orderData.car.gearType}</Text>
                                <Text>{orderData.car.location}</Text>
                                <Text>{orderData.car.usedDistance} kms used</Text>
                                <Text>{orderData.car.usedPeriod} years owned</Text>
                            </Box>
                        </HStack>
                        <Box p='20px' fontSize='lg' fontWeight='400'>
                            <Text>Price <span style={{ float: 'right' }}>Rs. {orderData.car.price}</span></Text>
                            <Text>Delivery Charge <span style={{ float: 'right' }}><s>Rs. {orderData.car.price}</s> Free</span></Text>
                            <hr style={{ border: '1px solid #f0f0f0', margin: '10px' }} />
                            <Text fontWeight='700'>Total Payable <span style={{ float: 'right' }}>Rs. {orderData.car.price}</span></Text>
                        </Box></>
                    }
                </Card>
            </Flex>
        </Box>
    )
}
