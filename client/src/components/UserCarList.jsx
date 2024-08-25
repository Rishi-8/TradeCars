import { Box, Button, Card, HStack, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AddCarModal } from './AddCarModal'
import axios from 'axios'
import apiClient from '../apiClient'

export const UserCarList = () => {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            const token = localStorage.getItem('token')
            try {
                const response = await apiClient.get('/api/cars',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                setCars(response.data);
                console.log(response.data)
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    const [isCarModalOpen, setIsCarModalOpen] = useState(false)

    if(loading) return <Text textAlign='center'>...Loading</Text>

    return (
        <div>
            <HStack align='center' justifyContent='space-between'>
                <Text fontSize='2xl' fontWeight='700'>Your Cars</Text>
                <Button colorScheme='teal' onClick={() => setIsCarModalOpen(true)}>Add Car</Button>
                <AddCarModal isOpen={isCarModalOpen} onClose={() => setIsCarModalOpen(false)} />
            </HStack>
            {
                cars.map((car) =>
                    <Card p={5} my={4} key={car._id}>
                        <HStack height='100px'>
                            <Image
                                src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                width='150px'
                            />
                            <Box>
                                <Text fontSize='md' fontWeight='500'>{car.make}</Text>
                                <Text fontSize='sm'>{car.model}</Text>
                                <Text fontSize='sm'>{car.fuelType} . {car.gearType}</Text>
                                <Text fontSize='md' fontWeight='500'>Rs. {car.price}</Text>
                            </Box>
                        </HStack>
                    </Card>
                )
            }
        </div>
    )
}
