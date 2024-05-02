import { AbsoluteCenter, Box, Card, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Brands = () => {

    const brands = [
        {image: 'https://spinny-images.gumlet.io/images/cars/new/makes/renault/logos/197x71.png?w=70&dpr=1.5', name: 'Renault'},
        {image: 'https://spinny-images.gumlet.io/images/cars/new/makes/renault/logos/197x71.png?w=70&dpr=1.5', name: 'Renault'},
        {image: 'https://spinny-images.gumlet.io/images/cars/new/makes/renault/logos/197x71.png?w=70&dpr=1.5', name: 'Renault'},
        {image: 'https://spinny-images.gumlet.io/images/cars/new/makes/renault/logos/197x71.png?w=70&dpr=1.5', name: 'Renault'},
        {image: 'https://spinny-images.gumlet.io/images/cars/new/makes/renault/logos/197x71.png?w=70&dpr=1.5', name: 'Renault'},
        {image: 'https://spinny-images.gumlet.io/images/cars/new/makes/renault/logos/197x71.png?w=70&dpr=1.5', name: 'Renault'},
        {image: 'https://spinny-images.gumlet.io/images/cars/new/makes/renault/logos/197x71.png?w=70&dpr=1.5', name: 'Renault'},
        {image: 'https://spinny-images.gumlet.io/images/cars/new/makes/renault/logos/197x71.png?w=70&dpr=1.5', name: 'Renault'},
        {image: 'https://spinny-images.gumlet.io/images/cars/new/makes/renault/logos/197x71.png?w=70&dpr=1.5', name: 'Renault'},
        {image: 'https://spinny-images.gumlet.io/images/cars/new/makes/renault/logos/197x71.png?w=70&dpr=1.5', name: 'Renault'},
        {image: 'https://spinny-images.gumlet.io/images/cars/new/makes/renault/logos/197x71.png?w=70&dpr=1.5', name: 'Renault'},
        {image: 'https://spinny-images.gumlet.io/images/cars/new/makes/renault/logos/197x71.png?w=70&dpr=1.5', name: 'Renault'}
    ]

  return (
    <Box py={10} mt='20px'>
        <Box position='relative' mb={10}>
            <Divider height='1px' bgColor='gray.500'/>
            <AbsoluteCenter bg='white' px={4} fontSize='2rem' fontWeight='bold'>
                Brands
            </AbsoluteCenter>
        </Box>
        <Flex direction='row' wrap='wrap'>
            {brands.map((brand, index) => (
                <Box width='16%' key={index}> 
                    <Card textAlign='center' height='100px' width='140px' mx='auto' mb={5}>
                        <Image src={brand.image} mt='auto'/>
                        <Text mb='auto' pt='2'>{brand.name}</Text>
                    </Card>
                </Box>
            ))}
        </Flex>
    </Box>
  )
}
