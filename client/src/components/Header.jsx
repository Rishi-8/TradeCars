import { Avatar, Box, Button, HStack, Icon, Image, Input, Text, Link, Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react'
import { IoCarSportSharp } from "react-icons/io5";
import { FaSearch, FaHeart } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [token, setToken] = useState()

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  })

  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if(searchQuery.trim().length <= 0){
      return
    }
    else navigate(`/search/${searchQuery}`)
  }

  const handleLogOut = () => {
    localStorage.removeItem('token')
    setToken(null)
  }
 
  return (
    <HStack height='80px' px={7} bg='gray.100' position='fixed' top='0' zIndex='100' w='100%'>
      <Link href='/' _hover={{textDecoration: 'none'}}>
        <HStack>
          <Text fontSize='2xl' fontWeight='bold' color='blue.600'>TradeCars</Text>
          <Icon as={IoCarSportSharp} color='blue.600' boxSize='40px'/>
        </HStack>
      </Link>
        <form style={{marginLeft:'auto'}} onSubmit={handleSearch}>
            <Box position='relative'>
                <Input type='text' placeholder='Search car by make or model' w='400px' bg='white' pr={10} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <Button position='absolute' right='0' variant='ghost' type='submit'><Icon as={FaSearch} zIndex='9'/></Button>
            </Box>
        </form>
        <Link ml='auto' mr={2} fontSize='1.1rem' fontWeight='semibold' _hover={{ textDecoration: "none" }} href='/new-car'>Buy New Car</Link>
        <Link mr={2} fontSize='1.1rem' fontWeight='semibold' _hover={{ textDecoration: "none" }} href='/used-car'>Buy Used Car</Link>
        <Link fontSize='1.1rem' fontWeight='semibold' _hover={{ textDecoration: "none" }} href='/sell-car'>Sell Car</Link>
        <Button as={Link} href='/favourites'><Icon as={FaHeart} variant='ghost'/></Button>
        {token ? 
          <Menu>
            <MenuButton as={Button} variant='ghost'>
              <Avatar size='sm'/>
            </MenuButton>
            <MenuList>
              <MenuItem>Account</MenuItem>
              <MenuItem>Your Orders</MenuItem>
              <MenuItem>Your Cars Listing</MenuItem>
              <MenuDivider/>
              <MenuItem onClick={handleLogOut}>Sign out</MenuItem>
            </MenuList>
          </Menu> :
          <>
            <Button as={Link} href='/sign-in' colorScheme='blue' _hover={{textDecoration: 'none'}}>Sign in</Button>
            <Button as={Link} href='/sign-up' colorScheme='blue' _hover={{textDecoration: 'none'}}>Sign up</Button>
          </>
        }
    </HStack>
  )
}
