import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Select } from '@chakra-ui/react'
import React, { useState } from 'react'

export const SellCar = () => {
    const [image, setImage] = useState(null)

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        console.log(URL.createObjectURL(e.target.files[0]))
    }
 
  return (
    <Box py={5} px={7}>
        <Heading mb={5}>Sell Car</Heading>
        {image && 
            <Image src={image} borderRadius='lg' mx='auto' w='60%' mb={10}/>
        }
        <form style={{textAlign: 'center'}}>
            <Flex wrap='wrap'>
                <FormControl w='50%' px={5} mb={5}>
                    <FormLabel fontSize='lg'>Car Brand</FormLabel>
                    <Input type='text'/>
                </FormControl>
                <FormControl w='50%' px={5} mb={5}>
                    <FormLabel fontSize='lg'>Car Model</FormLabel>
                    <Input type='text'/>
                </FormControl>
                <FormControl w='50%' px={5} mb={5}>
                    <FormLabel fontSize='lg'>Distance Used</FormLabel>
                    <InputGroup>
                        <Input type='text'/>
                        <InputRightAddon>km</InputRightAddon>
                    </InputGroup>
                </FormControl>
                <FormControl w='50%' px={5} mb={5}>
                    <FormLabel fontSize='lg'>Fuel Type</FormLabel>
                      <Select placeholder='Select Fuel Type'>
                          <option value='option1'>Petrol</option>
                          <option value='option2'>Diesel</option>
                          <option value='option3'>Electric</option>
                      </Select>
                </FormControl>
                <FormControl w='50%' px={5} mb={5}>
                    <FormLabel fontSize='lg'>Gear Type</FormLabel>
                      <Select placeholder='Select Gear Type'>
                          <option value='option1'>Manual</option>
                          <option value='option2'>Automatic</option>
                      </Select>
                </FormControl>
                <FormControl w='50%' px={5} mb={5}>
                    <FormLabel fontSize='lg'>Price</FormLabel>
                    <InputGroup>
                        <Input type='number'/>
                        <InputRightAddon>Lakh Rs</InputRightAddon>
                    </InputGroup>
                </FormControl>
                <FormControl w='50%' px={5} mb={5}>
                    <FormLabel fontSize='lg'>Car Image</FormLabel>
                    <Input type='file' accept='image/*' onChange={handleImageChange}/>
                </FormControl>
                <FormControl w='50%' px={5} mb={5}>
                    <FormLabel fontSize='lg'>Owner Number</FormLabel>
                      <Select placeholder='Select Owner Number'>
                          <option value='option1'>1st Owner</option>
                          <option value='option2'>2nd Owner</option>
                          <option value='option3'>3rd Owner</option>
                      </Select>
                </FormControl>
            </Flex>
            <Button size='lg' alignSelf='center' colorScheme='purple' mt={5}>Add this car on listing</Button>
        </form>
    </Box>
  )
}
