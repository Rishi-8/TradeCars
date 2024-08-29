import React, { useEffect, useState } from 'react'
import apiClient from '../apiClient'
import { Box, Button, Card, HStack, Image, Text } from '@chakra-ui/react'

export const Orders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {

      const token = localStorage.getItem('token')

      await apiClient.get("api/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
        .then((res) => {
          setOrders(res.data)
          setLoading(false)
          console.log("orders", res.data)
        })
        .catch(error => console.log(error))
    }
    fetchOrders()
  }, [])

  if (loading) return <Text>...Loading</Text>

  return (
    <div>
      <HStack align='center' justifyContent='space-between'>
        <Text fontSize='2xl' fontWeight='700'>Your Orders</Text>
      </HStack>
      {orders.length !== 0 ?
        orders.map((order) =>
          <Card p={5} my={4} key={order._id}>
            <HStack height='100px'>
              <Image
                src={order.car_id.image}
                width='150px'
              />
              <Box>
                <Text fontSize='md' fontWeight='500'>{order.car_id.make}</Text>
                <Text fontSize='sm'>{order.car_id.model}</Text>
                <Text fontSize='sm'>{order.car_id.fuelType} . {order.car_id.gearType}</Text>
                <Text fontSize='md' fontWeight='500'>Rs. {order.car_id.price}</Text>
              </Box>
            </HStack>
          </Card>
        )
        :
        <Text>You have no orders</Text>
      }
    </div>
  )
}
