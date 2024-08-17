import { AbsoluteCenter, Box, Button, Divider, Flex } from '@chakra-ui/react'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import { CarCard } from './CarCard'
import carimage from '../assets/carimage.jpg'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const PopularCars = () => {

    let sliderRef = useRef(null)

    const settings = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    }

  return (
    <Box py={10} mt='20px'>
        <Box position='relative' mb={10}>
            <Divider height='1px' bgColor='gray.500'/>
            <AbsoluteCenter bg='white' px={4} fontSize='2rem' fontWeight='bold'>
                Popular Cars
            </AbsoluteCenter>
        </Box>
        <Box pos='relative'>
        <Button pos='absolute' bgColor='white' top='50%' p='0' boxSizing='50px' borderRadius='50%' zIndex='50' boxShadow='0 8px 12px 0 rgba(36,39,44,.15)' onClick={() => sliderRef.slickPrev()}><IoIosArrowBack/></Button>
        <Button pos='absolute' bgColor='white' top='50%' right='0' p='0' boxSizing='50px' borderRadius='50%' zIndex='50' boxShadow='0 8px 12px 0 rgba(36,39,44,.15)' onClick={() => sliderRef.slickNext()}><IoIosArrowForward/></Button>
            <Slider ref={slider => {sliderRef = slider;}} {...settings}>
                <Flex>
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
                </Flex>
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
