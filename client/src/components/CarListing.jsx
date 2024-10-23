import { Box, Card, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import carImage from '../assets/carimage.jpg'
import { useNavigate } from 'react-router-dom'

export const CarListing = ({cars}) => {

    const navigate = useNavigate()

  return (
    <Flex wrap='wrap'>
        {cars.map((car) => (
            <Box w='25%' key={car._id}>
                <Card overflow='hidden' w='270px' mx='auto' mb={5} _hover={{opacity:0.8, cursor:'pointer'}} onClick={() => navigate(`/car/${car._id}`)}>
                    <Image src={car.image}/>
                    <Box p={5}>
                        <Text>{car.make}</Text>
                        <Heading size='md' fontWeight='semibold'>{car.model}</Heading>
                        <Text fontSize='sm'>{car.usedDistance} km . {car.fuelType} . {car.gearType}</Text>
                        <Text fontSize='xl' fontWeight='semibold'>Rs. {car.price}</Text>
                        <Text>{car.date}</Text>
                    </Box>
                </Card>
            </Box>
        ))}
    </Flex>
  )
}
