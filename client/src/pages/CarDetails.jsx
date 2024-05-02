import { Box, Button, Card, Flex, Heading, Image, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import carimage from '../assets/carimage.jpg'

export const CarDetails = () => {

    const {carId} = useParams()

  return (
    <Box py={5} px={6} minHeight='200px'>
        <Flex>
            <Box flexBasis='55%'>
                <Image src={carimage} w='100%' borderRadius='lg' shadow='md'/>
            </Box>
            <Card p={5} h='100%' ml='5%' flex='1'>
                <Heading mb='2'>Hyundai Liger</Heading>
                <Tag borderRadius='full' colorScheme='green' width='fit-content' mb={5}>New</Tag>
                <Text>55,717 kms . Petrol . Manual . 1st Owner</Text>
                <Text fontSize='2xl' fontWeight='700' mb={5}>Rs. 9.49 Lakh</Text>
                <Button colorScheme='purple' size='lg'>Buy this car</Button>
            </Card>
        </Flex>
    </Box>
  )
}
