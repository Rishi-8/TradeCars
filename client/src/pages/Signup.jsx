import { Box, Button, Card, Flex, FormControl, FormLabel, HStack, Heading, Icon, Image, Input, InputGroup, InputRightElement, Link, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import loginimage from '../assets/login-banner.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md"
 
export const Signup = () => {

  const [show, setShow] = useState(false)

  const navigate = useNavigate()
  const toast = useToast()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const firstName = e.target[0].value
    const lastName = e.target[1].value
    const email = e.target[2].value
    const password = e.target[3].value
    const name = `${firstName} ${lastName}`

    try {
      const res = await axios.post('api/users', {name, password, email})
      if(res?.data?.token) {
        localStorage.setItem('token', res.data.token)
        navigate('/')
        toast({
          title: 'Registeration Successful',
          status: 'success',
          position: 'top',
          isClosable: 'true'
        })
      }
    } catch (error) {
      console.error(error)
      toast({
        title: 'User already exists',
        status: 'error',
        position: 'top',
        isClosable: 'true'
      })
    }
  }

  return (
    <Box py={10}>
      <Card mx='auto' w='60%'>
        <Flex>
          <Image src={loginimage}/>
          <Box px={10} my='auto' flex='1'>
            <Heading size='lg' mb={5}>Sign up</Heading>
            <form onSubmit={handleSubmit}>
              <HStack>
                <FormControl mb={2}>
                  <FormLabel>First Name</FormLabel>
                  <Input type='text'/>
                </FormControl>
                <FormControl mb={2}>
                  <FormLabel>Last Name</FormLabel>
                  <Input type='text'/>
                </FormControl>
              </HStack>
              <FormControl mb={2}>
                <FormLabel>Email</FormLabel>
                <Input type='text'/>
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={show ? 'text' : 'password'}/>
                  <InputRightElement>
                    <Icon 
                      boxSize='1.2rem' 
                      as={!show ? MdOutlineVisibility : MdOutlineVisibilityOff}
                      onClick={() => setShow(!show)}
                      cursor='pointer'
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button type='submit' w='100%' size='lg' colorScheme='blue' mt={5}>Sign up</Button>
            </form>
            <Text pt={1}>Already have an account? <Link href='/sign-in' color='blue.500'>Sign in</Link></Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  )
}
