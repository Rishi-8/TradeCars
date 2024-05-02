import { Box, Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const CarCard = ({name, model, image, date, distance, fuelType, gearType, price}) => {
  return (
    <Card w='300px' borderRadius='lg' overflow='hidden' mx='auto'>
      <Image src={image} w='100%' h='200px'/>
      <Box p={5}>
        <Text>{model}</Text>
        <Heading size='md' fontWeight='semibold'>{name}</Heading>
        <Text fontSize='sm'>{distance} km . {fuelType} . {gearType}</Text>
        <Text fontSize='xl' fontWeight='semibold'>Rs. {price}</Text>
        <Text>{date}</Text>
      </Box>
    </Card>
  )
}
