import { Button, Card, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const Account = () => {
  return (
    <>
        <Text fontSize='2xl' fontWeight='700' mb={4}>Account</Text>
        <Stack as={Card} align='center' justifyContent='start' p='50px' gap='0'>
            <Image 
                src='https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                height='100px'
                width='100px'
                borderRadius='50%'
            />
            <Text fontSize='2xl' fontWeight='700'>User Name</Text>
            <Text fontSize='lg'>user@email.com</Text>
            <Button mt={5} colorScheme='blue' size='sm'>Edit</Button>
        </Stack>
    </>
  )
}
