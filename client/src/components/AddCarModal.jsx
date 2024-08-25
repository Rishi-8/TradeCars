import { Box, Button, Center, Flex, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiClient from '../apiClient'

export const AddCarModal = ({ isOpen, onClose }) => {
    const [image, setImage] = useState()
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [usedPeriod, setusedPeriod] = useState()
    const [usedDistance, setusedDistance] = useState()
    const [fuelType, setFuelType] = useState('')
    const [gearType, setGearType] = useState('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('')

    const navigate = useNavigate()

    const toast = useToast()

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('image', image)
        formData.append('make', make)
        formData.append('model', model)
        formData.append('usedPeriod', usedPeriod)
        formData.append('usedDistance', usedDistance)
        formData.append('fuelType', fuelType)
        formData.append('gearType', gearType)
        formData.append('location', location)
        formData.append('price', price)


        const token = localStorage.getItem('token')
        console.log(formData)

        try {
            const res = await apiClient.post('api/cars', formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            navigate(0)
            onClose()
            toast({
                title: 'Car Created Successfully',
                status: 'success',
                position: 'top',
                isClosable: 'true'
            })

        } catch (error) {
            console.error(error)
            toast({
                title: 'Car not created',
                status: 'error',
                position: 'top',
                isClosable: 'true'
            })
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size='lg'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Car</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form style={{ textAlign: 'center' }} onSubmit={handleFormSubmit} id='myform'>
                        <FormControl>
                            <label htmlFor='image-upload'>
                                {!image ?
                                    <Flex border='dashed blue 2px' borderRadius='10px' height='250px'>
                                        <Text marginY='auto' flex='1'>Choose an image</Text>
                                    </Flex>:
                                    <Image src={URL.createObjectURL(image)}/>
                                }
                            </label>
                            <Input type='file' id='image-upload' accept='image/*' name='car-image' hidden onChange={(e) => setImage(e.target.files[0])} required/>
                        </FormControl>
                        <FormControl isRequired my={4}>
                            <FormLabel>Car Make</FormLabel>
                            <Input type='text' name='make' value={make} onChange={(e) => setMake(e.target.value)} />
                        </FormControl>
                        <FormControl isRequired my={4}>
                            <FormLabel>Car Model</FormLabel>
                            <Input type='text' value={model} onChange={(e) => setModel(e.target.value)} />
                        </FormControl>
                        <FormControl isRequired my={4}>
                            <FormLabel>Used Period (In years)</FormLabel>
                            <Input type='number' value={usedPeriod} onChange={(e) => setusedPeriod(e.target.value)} />
                        </FormControl>
                        <FormControl isRequired my={4}>
                            <FormLabel>Used Distance (In kms)</FormLabel>
                            <Input type='number' value={usedDistance} onChange={(e) => setusedDistance(e.target.value)} />
                        </FormControl>
                        <FormControl isRequired my={4}>
                            <FormLabel>Fuel Type</FormLabel>
                            <Select placeholder='Select fuel type' value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
                                <option>Diesel</option>
                                <option>petrol</option>
                                <option>CNG</option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired my={4}>
                            <FormLabel>Gear Type</FormLabel>
                            <Select placeholder='Select gear type' value={gearType} onChange={(e) => setGearType(e.target.value)}>
                                <option>Automatic</option>
                                <option>Manual</option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired my={4}>
                            <FormLabel>Location</FormLabel>
                            <Input type='text' value={location} onChange={(e) => setLocation(e.target.value)} />
                        </FormControl>
                        <FormControl isRequired my={4}>
                            <FormLabel>Price</FormLabel>
                            <Input type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
                        </FormControl>
                        <Button width='50%' colorScheme='blue' type='submit'>Add</Button>
                    </form>
                </ModalBody>

                <ModalFooter>
                    {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button> */}
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
