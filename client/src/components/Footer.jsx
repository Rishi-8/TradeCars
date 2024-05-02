import { Box, Button, Flex, HStack, Icon, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { IoCarSportSharp } from 'react-icons/io5'

export const Footer = () => {
  return (
    <Flex direction='row' backgroundImage= 'linear-gradient(60deg,#29323c 0%, #485563 100%)' color='white' p='50px' mt='10px'>
        <Box flexBasis='40%'>
            <HStack mb='4'>
                <Text fontSize='2xl' fontWeight='bold' color='blue.100'>TradeCars</Text>
                <Icon as={IoCarSportSharp} color='blue.100' boxSize='40px'/>
            </HStack>
            <Text mb='4'>TradeCars is the most trusted way of buying and selling used cars. 
                Choose from over 5000 fully inspected second-hand car models. 
                Select online and book a test drive at your home or at a TradeCars Car Hub near you. 
                Get a no-questions-asked 5-day money back guarantee and a free one-year 
                comprehensive service warranty with Assured Resale Value on every car.
            </Text>
        </Box>
        <Box ml={10}>
            <Text textTransform='uppercase' mb={2}>About</Text>
            <Link fontSize='sm' display='block' mb={1}>Who we are?</Link>
            <Link fontSize='sm' display='block' mb={1}>FAQ's</Link>
            <Link fontSize='sm' display='block' mb={1}>How it works?</Link>
            <Link fontSize='sm' display='block' mb={1}>Inpsection process</Link>
            <Link fontSize='sm' display='block' mb={1}>Customer reviews</Link>
            <Link fontSize='sm' display='block' mb={1}>Used Cars</Link>
            <Link fontSize='sm' display='block' mb={1}>New Cars</Link>
        </Box>
        <Box flex={1} mx='10' my='auto'>
            <Button alignSelf='center' justifySelf='center' w='100%' size='lg' variant='outline' color='white' _hover={{color: 'black', bg:'white'}}>Contact Us</Button>
            <HStack py={2} mb='4' justifyContent='center'>
                <Image src='https://img.icons8.com/?size=96&id=32323&format=png' boxSize='50px' filter='grayscale(1)' transition='0.3s ease filter' _hover={{filter: 'grayscale(0)', cursor: 'pointer'}}/>
                <Image src='https://img.icons8.com/?size=96&id=13912&format=png' boxSize='50px' filter='grayscale(1)' transition='0.3s ease filter' _hover={{filter: 'grayscale(0)', cursor: 'pointer'}}/>
                <Image src='https://img.icons8.com/?size=96&id=ClbD5JTFM7FA&format=png' boxSize='50px' filter='grayscale(2)' transition='0.3s ease filter' _hover={{filter: 'grayscale(0)', cursor: 'pointer'}}/>
            </HStack>
            <Text textAlign='center'>Copyleft &copy; TradeCars, All rights reserved</Text>
        </Box>
    </Flex>
  )
}
