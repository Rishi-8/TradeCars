import { Box, Button, Card, Flex, FormControl, FormLabel, HStack, Heading, Image, Input, Link, Text } from '@chakra-ui/react'
import React from 'react'
import loginimage from '../assets/login-banner.svg'
 
export const Signup = () => {
  return (
    <Box py={10}>
      <Card mx='auto' w='60%'>
        <Flex>
          <Image src={loginimage}/>
          <Box px={10} my='auto' flex='1'>
            <Heading size='lg' mb={5}>Sign up</Heading>
            <form>
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
                <Input type='text'/>
              </FormControl>
              <Button w='100%' size='lg' colorScheme='blue' mt={5}>Sign in</Button>
            </form>
            <Text pt={1}>Don't have an account? <Link href='/sign-in' color='blue.500'>Sign in</Link></Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  )
}
