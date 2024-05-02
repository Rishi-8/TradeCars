import { Box, Button, Card, Flex, FormControl, FormLabel, Heading, Image, Input, Link, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import loginimage from '../assets/login-banner.svg'
 
export const Signin = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    
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
                <Input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/>
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
