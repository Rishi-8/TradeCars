import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import front_car from '../assets/front_page_car.jpeg'
import carimage from '../assets/carimage.jpg'
import { CarCard } from '../components/CarCard'
import { distance } from 'framer-motion'
import { PopularCars } from '../components/PopularCars'

export const Home = () => {

  const cars = [
    {name: 'Honda', model: 'Wagonr', image: carimage, distance: '20K km', fuelType: 'Petrol', gearType: 'Automatic', date: '19-11-2022'}
  ]

  return (
    <Box>
        <Box position='relative' width='100%'>
            <Image src={front_car} opacity='0.5' width='100%'/>
            <Text position='absolute' top='100' left='10%' fontSize='5rem' fontWeight='semibold'>Buy Cars from verified sellers</Text>
            <Button position='absolute' top='230' left='40%' size='lg' colorScheme='purple'>Buy used Cars</Button>
        </Box>
        {/* <Box p={5}>
          <CarCard 
            name='Hyundai' 
            model='Nano'
            image={carimage} 
            distance='20K'
            fuelType='petrol'
            gearType='manual'
            price='3.01 Lakh'
            date='22-12-2023'
          />
        </Box> */}
        <Box mx={10}>
          <PopularCars/>
        </Box>
    </Box>
  )
}
