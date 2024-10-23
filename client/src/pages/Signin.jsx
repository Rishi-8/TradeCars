import { Box, Button, Card, Flex, FormControl, FormLabel, Heading, Icon, Image, Input, InputGroup, InputRightElement, Link, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import loginimage from '../assets/login-banner.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md"
 
export const Signin = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [show, setShow] = useState(false)

  const toast = useToast()

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post('api/users/auth', {email, password})
      if(res?.data?.token){
        localStorage.setItem('token', res.data.token)
        navigate("/")
        toast({
          title: 'Login Successful',
          status: 'success',
          position: 'top',
          isClosable: 'true'
        })
      }
    } catch (error) {
      console.log(error)
      toast({
        title: 'Invalid Password or Email',
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
            <Heading size='lg' mb={5}>Sign in</Heading>
            <form onSubmit={handleSubmit}>
              <FormControl mb={2}>
                <FormLabel>Email</FormLabel>
                <Input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={show ? 'text' : 'password'} value={password} onChange={(e)=>setPassword(e.target.value)}/>
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
              <Button w='100%' type='submit' size='lg' colorScheme='blue' mt={5}>Sign in</Button>
            </form>
            <Text pt={1}>Don't have an account? <Link href='/sign-up' color='blue.500'>Sign up</Link></Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  )
}
