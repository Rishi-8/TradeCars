import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import { CarCard } from './CarCard'
import carimage from '../assets/carimage.jpg'

export const NewCars = () => {

    const settings = {
        arrows: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    }

  return (
    <Box py={10} mt='10px'>
        <Box position='relative' mb={10}>
            <Divider height='1px' bgColor='gray.500'/>
            <AbsoluteCenter bg='white' px={4} fontSize='2rem' fontWeight='bold'>
                New Cars
            </AbsoluteCenter>
        </Box>
        <Box className='slider-container'>
            <Slider {...settings}>
                <Box>
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
                </Box>
                <Box>
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
                </Box>
                <Box>
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
                </Box>
                <Box>
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
                </Box>
                <Box>
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
                </Box>
                <Box>
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
                </Box>
                
            </Slider>
        </Box>
    </Box>
  )
}
