import { Box, Button, Card, HStack, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AddCarModal } from './AddCarModal'

export const UserCarList = () => {

    const [isCarModalOpen, setIsCarModalOpen] = useState(false)

    const cars = [
        {
            name: "Car Name",
            image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            fuelType: "petrol",
            gearType: "Manual",
            price: 90000000,
        },
        {
            name: "Car Name",
            image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            fuelType: "petrol",
            gearType: "Manual",
            price: 90000000,
        },
        {
            name: "Car Name",
            image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            fuelType: "petrol",
            gearType: "Manual",
            price: 90000000,
        },
        {
            name: "Car Name",
            image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            fuelType: "petrol",
            gearType: "Manual",
            price: 90000000,
        }
    ]

    return (
        <div>
            <HStack align='center' justifyContent='space-between'>
                <Text fontSize='2xl' fontWeight='700'>Your Cars</Text>
                <Button colorScheme='teal' onClick={()=>setIsCarModalOpen(true)}>Add Car</Button>
                <AddCarModal isOpen={isCarModalOpen} onClose={()=>setIsCarModalOpen(false)}/>
            </HStack>
            {
                cars.map((car, index) =>
                    <Card p={5} my={4} key={index}>
                        <HStack height='100px'>
                            <Image
                                src={car.image}
                                width='150px'
                            />
                            <Box>
                                <Text fontSize='md' fontWeight='500'>{car.name}</Text>
                                <Text fontSize='sm'>{car.fuelType} . {car.gearType}</Text>
                                <Text fontSize='md' fontWeight='500'>Rs. {car.price}</Text>
                            </Box>
                        </HStack>
                    </Card>
                )
            }
            <Card p={5}>
                <HStack height='100px'>
                    <Image
                        src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        width='150px'
                    />
                    <Box>
                        <Text>Car Name</Text>
                        <Text>FuelType . gearType</Text>
                        <Text>Rs. Price</Text>
                    </Box>
                </HStack>
            </Card>
        </div>
    )
}
