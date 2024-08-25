import { Box, Card, Flex, HStack, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import carimage from '../assets/carimage.jpg'
import apiClient from '../apiClient'

export const SearchResult = () => {
  const [cars, setCars] = useState([])
  const [searchParams] = useSearchParams()

  // const { query } = useParams()
  const query = searchParams.get('query')

  useEffect(() => {

    const fetchCars = async () => {
      const token = localStorage.getItem('token')
      await apiClient.get(`api/cars/search/?query=${query}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
        .then((res) => {
          console.log(res.data)
          setCars(res.data)
        })
        .catch((error) => console.log(error))
    }

    fetchCars()
  }, [query])

  return (
    <Box py={5} width='700px' minH='400px' mx='auto'>
      <Heading size='lg' mb={10}>{query}</Heading>
      <Flex direction='column' gap={4}>
        {cars.map((car) =>
          <Card h='200px' key={car._id}>
            <HStack align='start'>
              <Image src={car.image} objectFit='cover' height='200px' />
              <Box p={5}>
                <Heading size='lg'>{car.make} {car.model}</Heading>
                <Text>22k km . Petrol . Automatic</Text>
                <Text fontSize='lg' fontWeight='semibold'>Rs. 10 Lakh</Text>
                <Text>1st Owner</Text>
                <Text>22-10-2023</Text>
              </Box>
            </HStack>
          </Card>
        )}
      </Flex>
    </Box>
  )
}
