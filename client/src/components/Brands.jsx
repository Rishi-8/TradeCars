import { AbsoluteCenter, Box, Card, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Brands = () => {
  return (
    <Box py={10}>
        <Box position='relative' mb={10}>
            <Divider height='1px' bgColor='gray.500'/>
            <AbsoluteCenter bg='white' px={4} fontSize='2rem' fontWeight='bold'>
                Brands
            </AbsoluteCenter>
        </Box>
        <Flex direction='row'>
            <Card textAlign='center' height='100px' width='140px'>
                <Image src='https://spinny-images.gumlet.io/images/cars/new/makes/renault/logos/197x71.png?w=70&dpr=1.5' mt='auto'/>
                <Text mb='auto' pt='2'>Renault</Text>
            </Card>
        </Flex>
    </Box>
  )
}
