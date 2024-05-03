import { Box, Heading} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import carimage from '../assets/carimage.jpg'
import { CarListing } from '../components/CarListing'
import { useNavigate } from 'react-router-dom'

export const Favourites = () => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect (() => {
    if(!localStorage.getItem('token')){
      navigate('/sign-in')
    } else {
      setLoading(false)
    }
  })

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

  if(loading) {
    return(
      <Box minH='400px'>

      </Box>
    )
  }
  else {
    return (
      <Box py={5} px={7}>
          <Heading mb={7}>Favourites</Heading>
          <CarListing cars={cars}/>
      </Box>
    )
  }
}
