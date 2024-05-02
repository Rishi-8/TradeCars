import { Box, Button, Card, Flex, FormControl, FormLabel, Heading, Image, Input, Link, Text } from '@chakra-ui/react'
import React from 'react'
import loginimage from '../assets/login-banner.svg'
 
export const Signin = () => {
  return (
    <Box py={10}>
      <Card mx='auto' w='60%'>
        <Flex>
          <Image src={loginimage}/>
          <Box px={10} my='auto' flex='1'>
            <Heading size='lg' mb={5}>Sign in</Heading>
            <form>
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
            <Text pt={1}>Don't have an account? <Link href='/sign-up' color='blue.500'>Sign up</Link></Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  )
}
