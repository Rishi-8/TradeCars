import { Avatar, Box, Card, HStack, Link, Stack, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Account } from '../components/Account'
import { UserCarList } from '../components/UserCarList'

export const Settings = () => {

    const location = useLocation()
    const {pathname} = location
    const tabComponent = pathname.toString().split("/")[1]

  return (
    <Box maxW='980px' margin='41px auto' py={10}>
        <HStack gap={10} alignItems='start'>
            <Card flex='2'>
                <Stack height='200px' alignItems='center' justifyContent='center' gap='0' bg='#f1f3f6'>
                    <Avatar size='lg' name='user name'/>
                    <Text fontWeight='700' fontSize='xl'>User Name</Text>
                    <Text fontWeight='600'>user@email.com</Text>
                </Stack>
                <Stack p='10px' gap='0'>
                    <Link as={NavLink} to='account' _hover={{ textDecoration: "none" }}  _activeLink={{color: 'blue.500', bg: 'blue.50'}} fontSize='1.1rem' fontWeight='600' p={2} px={4} borderRadius='10px'>Account</Link>
                    <Link as={NavLink} to='orders' _hover={{ textDecoration: "none" }} _activeLink={{color: 'blue.500', bg: 'blue.50'}} fontSize='1.1rem' fontWeight='600' p={2} px={4} py={2} borderRadius='10px'>Your Orders</Link>
                    <Link as={NavLink} to='car-listing' _hover={{ textDecoration: "none" }} _activeLink={{color: 'blue.500', bg: 'blue.50'}} fontSize='1.1rem' fontWeight='600' p={2} px={4} py={2} borderRadius='10px'>Your Car Listing</Link>
                    <Link as={NavLink} to='favourites' _hover={{ textDecoration: "none" }} _activeLink={{color: 'blue.500', bg: 'blue.50'}} fontSize='1.1rem' fontWeight='600' p={2} px={4} py={2} borderRadius='10px'>Favourites</Link>
                </Stack>
            </Card>
            <Box flex='3'>
                <Outlet/>
            </Box>
        </HStack>
    </Box>
  )
}
