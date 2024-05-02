import { Box, Card, Flex, HStack, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import carimage from '../assets/carimage.jpg'

export const SearchResult = () => {

    const { query } = useParams()

  return (
    <Box py={5} width='700px' minH='400px' mx='auto'>
        <Heading size='lg' mb={10}>{query}</Heading>
        <Flex direction='column' gap={4}>
            <Card h='200px'>
              <HStack align='start'>
                <Image src={carimage} objectFit='cover' height='200px'/>
                <Box p={5}>
                  <Heading size='lg'>Renault Liger</Heading>
                  <Text>22k km . Petrol . Automatic</Text>
                  <Text fontSize='lg' fontWeight='semibold'>Rs. 10 Lakh</Text>
                  <Text>1st Owner</Text>
                  <Text>22-10-2023</Text>
                </Box>
              </HStack>
            </Card>
        </Flex>
    </Box>
  )
}
