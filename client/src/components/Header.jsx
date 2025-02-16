import { Avatar, Box, Button, HStack, Icon, Input, Text, Link, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Spinner } from '@chakra-ui/react'
import { IoCarSportSharp } from "react-icons/io5";
import { FaSearch, FaHeart } from "react-icons/fa";
import React, { useState } from 'react'
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const Header = ({ user, loading }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const { logout } = useAuth()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim().length <= 0) {
      return
    }
    else navigate(`/search?query=${searchQuery}`)
  }

  const handleLogOut = () => {
    logout()
  }

  return (
    <HStack height='80px' px={7} bg='gray.100' position='fixed' top='0' zIndex='100' w='100%'>
      <Link as={RouterLink} to='/' _hover={{ textDecoration: 'none' }}>
        <HStack>
          <Text fontSize='2xl' fontWeight='bold' color='blue.600'>TradeCars</Text>
          <Icon as={IoCarSportSharp} color='blue.600' boxSize='40px' />
        </HStack>
      </Link>

      {/* Search Form */}
      <form onSubmit={handleSearch}>
        <Box position='relative' width='400px'>
          <Input
            type='text'
            placeholder='Search car by make or model'
            bg='white'
            pr={10}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button position='absolute' right='0' variant='ghost' type='submit'>
            <Icon as={FaSearch} />
          </Button>
        </Box>
      </form>

      {/* Navigation Links */}
      <HStack spacing={5} ml='auto'>
        <Link as={RouterLink} fontSize='1.1rem' fontWeight='semibold' _hover={{ textDecoration: "none" }} to='/new-car'>Buy New Car</Link>
        <Link as={RouterLink} fontSize='1.1rem' fontWeight='semibold' _hover={{ textDecoration: "none" }} to='/used-car'>Buy Used Car</Link>
        <Link as={RouterLink} fontSize='1.1rem' fontWeight='semibold' _hover={{ textDecoration: "none" }} to='/sell-car'>Sell Car</Link>
        {user && <Button as={RouterLink} to='/favourites'><Icon as={FaHeart} variant='ghost' /></Button>}

        {/* Conditional Rendering of User Menu or Sign In/Sign Up */}
        {loading ? (
          <Spinner size="sm" />
        ) : user ? (
          <Menu>
            <MenuButton as={Button} variant='ghost' _focus={{ bgColor: 'inherit' }}>
              <HStack align='center'>
                <Avatar size='xs' name={user.name} />
                <Text>{user.name}</Text>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} _hover={{ textDecoration: 'none' }} to='/settings/account'>Account</MenuItem>
              <MenuItem as={RouterLink} _hover={{ textDecoration: 'none' }} to='/settings/orders'>Your Orders</MenuItem>
              <MenuItem as={RouterLink} _hover={{ textDecoration: 'none' }} to='/settings/car-listing'>Your Cars Listing</MenuItem>
              <MenuDivider />
              <MenuItem onClick={handleLogOut}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <>
            <Button as={RouterLink} to='/sign-in' colorScheme='blue' _hover={{ textDecoration: 'none' }}>Sign in</Button>
            <Button as={RouterLink} to='/sign-up' colorScheme='blue' _hover={{ textDecoration: 'none' }}>Sign up</Button>
          </>
        )}
      </HStack>
    </HStack>
  )
}
