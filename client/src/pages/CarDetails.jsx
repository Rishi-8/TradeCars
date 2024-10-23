import { Box, Button, Card, Flex, Heading, Image, Tag, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import carimage from '../assets/carimage.jpg'
import axios from 'axios'
import apiClient from '../apiClient'

export const CarDetails = () => {
    const [car, setCar] = useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { carId } = useParams()

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await apiClient.get(`api/cars/${carId}`);
                setCar(response.data);
                console.log(response.data)
                setLoading(false);
            } catch (err) {
                setError(err.message);
                console.log(err)
                setLoading(false);
            }
        };

        fetchCar();
    }, []);

    return (
        <Box py={5} px={6} minHeight='200px'>
            <Flex>
                <Box flexBasis='55%'>
                    <Image src={car.image} w='100%' borderRadius='lg' shadow='md' />
                </Box>
                <Card p={5} h='100%' ml='5%' flex='1'>
                    <Heading mb='2'>{car.make} {car.model}</Heading>
                    <Tag borderRadius='full' colorScheme='green' width='fit-content' mb={5}>{car.usedPeriod == 0 ? "New" : "Old"}</Tag>
                    <Text>{car.usedDistance} kms . {car.fuelType} . {car.gearType} . 1st Owner</Text>
                    <Text fontSize='2xl' fontWeight='700' mb={5}>Rs. {car.price}</Text>
                    <Button colorScheme='purple' size='lg' as={Link} to={`/checkout/${carId}`}>Buy this car</Button>
                </Card>
            </Flex>
        </Box>
    )
}
