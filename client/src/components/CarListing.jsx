import { Box, Card, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const CarListing = ({cars}) => {
  return (
    <Flex wrap='wrap'>
        {cars.map((car, index) => (
            <Box w='25%' key={index}>
                <Card overflow='hidden' w='270px' mx='auto' mb={5} _hover={{opacity:0.8, cursor:'pointer'}}>
                    <Image src={car.image}/>
                    <Box p={5}>
                        <Text>{car.model}</Text>
                        <Heading size='md' fontWeight='semibold'>{car.name}</Heading>
                        <Text fontSize='sm'>{car.distance} km . {car.fuelType} . {car.gearType}</Text>
                        <Text fontSize='xl' fontWeight='semibold'>Rs. {car.price}</Text>
                        <Text>{car.date}</Text>
                    </Box>
                </Card>
            </Box>
        ))}
    </Flex>
  )
}
