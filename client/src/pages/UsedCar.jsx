import { Box, Heading} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CarListing } from '../components/CarListing'
import apiClient from '../apiClient'

export const UsedCar = () => {

  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchCars = async () => {
          try {
              const response = await apiClient.get('api/cars/used');
              setCars(response.data);
              console.log(response.data)
              setLoading(false);
          } catch (err) {
              setError(err.message);
              setLoading(false);
          }
      };

      fetchCars();
  }, []);

  return (
    <Box py={5} px={7}>
        <Heading mb={7}>Used Cars</Heading>
        <CarListing cars={cars}/>
    </Box>
  )
}
