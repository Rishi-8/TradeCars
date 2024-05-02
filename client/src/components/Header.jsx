import { Avatar, Box, Button, HStack, Icon, Image, Input, Text, Link } from '@chakra-ui/react'
import { IoCarSportSharp } from "react-icons/io5";
import { FaSearch, FaHeart } from "react-icons/fa";
import React from 'react'

export const Header = () => {
  return (
    <HStack py={5} px={7} bg='gray.100' position='fixed' top='0' zIndex='100' w='100%'>
        <Text fontSize='2xl' fontWeight='bold' color='blue.600'>TradeCars</Text>
        <Icon as={IoCarSportSharp} color='blue.600' boxSize='40px'/>
        <form style={{marginLeft:'auto'}}>
            <Box position='relative'>
                <Input type='text' placeholder='Search car by make or model' w='400px' bg='white' pr={10}/>
                <Button position='absolute' right='0' variant='ghost'><Icon as={FaSearch} zIndex='9'/></Button>
            </Box>
        </form>
        <Link ml='auto' mr={2} fontSize='1.1rem' fontWeight='semibold' _hover={{ textDecoration: "none" }} href='new-car'>Buy New Car</Link>
        <Link mr={2} fontSize='1.1rem' fontWeight='semibold' _hover={{ textDecoration: "none" }} href='used-car'>Buy Used Car</Link>
        <Link fontSize='1.1rem' fontWeight='semibold' _hover={{ textDecoration: "none" }} href='sell-car'>Sell Car</Link>
        <Button><Icon as={FaHeart} variant='ghost'/></Button>
        <Avatar size='sm'/>
    </HStack>
  )
}
