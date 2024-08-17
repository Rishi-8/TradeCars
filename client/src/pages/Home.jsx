import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import front_car from '../assets/front_page_car.jpeg'
import carimage from '../assets/carimage.jpg'
import { CarCard } from '../components/CarCard'
import { distance } from 'framer-motion'
import { PopularCars } from '../components/PopularCars'
import { Brands } from '../components/Brands'
import { NewCars } from '../components/NewCars'

export const Home = () => {

  const cars = [
    {name: 'Honda', model: 'Wagonr', image: carimage, distance: '20K km', fuelType: 'Petrol', gearType: 'Automatic', date: '19-11-2022'}
  ]

  return (
    <Box>
        <Box position='relative' width='100%' color='white'
          _after={{content: '""', pos:'absolute', top:0, left:0, bg: "rgb(51, 41, 41)", width: "100%", h: "100%", opacity: "0.5"}}>
            <Image 
              src={front_car} 
              pos='relative'
              width='100%'
            />
            <Text zIndex={2} position='absolute' top='100' left='10%' fontSize='5rem' fontWeight='semibold'>Buy Cars from verified sellers</Text>
            <Button zIndex={2} position='absolute' top='230' left='40%' size='lg' colorScheme='purple'>Buy used Cars</Button>
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
          <Brands/>
          <NewCars/>
        </Box>
    </Box>
  )
}
