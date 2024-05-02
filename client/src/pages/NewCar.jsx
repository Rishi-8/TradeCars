import { Box, Heading} from '@chakra-ui/react'
import React from 'react'
import carimage from '../assets/carimage.jpg'
import { CarListing } from '../components/CarListing'

export const NewCar = () => {

    const cars = [
        {image: carimage, model: 'Reanult', name: 'Liger', distance: '20k', fuelType: 'Petrol', gearType: 'manual', price: '2Lakh', date: '22-12-2023'},
        {image: carimage, model: 'Reanult', name: 'Liger', distance: '20k', fuelType: 'Petrol', gearType: 'manual', price: '2Lakh', date: '22-12-2023'},
        {image: carimage, model: 'Reanult', name: 'Liger', distance: '20k', fuelType: 'Petrol', gearType: 'manual', price: '2Lakh', date: '22-12-2023'},
        {image: carimage, model: 'Reanult', name: 'Liger', distance: '20k', fuelType: 'Petrol', gearType: 'manual', price: '2Lakh', date: '22-12-2023'},
        {image: carimage, model: 'Reanult', name: 'Liger', distance: '20k', fuelType: 'Petrol', gearType: 'manual', price: '2Lakh', date: '22-12-2023'},
        {image: carimage, model: 'Reanult', name: 'Liger', distance: '20k', fuelType: 'Petrol', gearType: 'manual', price: '2Lakh', date: '22-12-2023'},
        {image: carimage, model: 'Reanult', name: 'Liger', distance: '20k', fuelType: 'Petrol', gearType: 'manual', price: '2Lakh', date: '22-12-2023'},
        {image: carimage, model: 'Reanult', name: 'Liger', distance: '20k', fuelType: 'Petrol', gearType: 'manual', price: '2Lakh', date: '22-12-2023'},
        {image: carimage, model: 'Reanult', name: 'Liger', distance: '20k', fuelType: 'Petrol', gearType: 'manual', price: '2Lakh', date: '22-12-2023'}
    ]

  return (
    <Box py={5} px={7}>
        <Heading mb={7}>New Cars</Heading>
        <CarListing cars={cars}/>
    </Box>
  )
}
