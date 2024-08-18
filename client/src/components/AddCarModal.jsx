import { Button, Center, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

export const AddCarModal = ({ isOpen, onClose }) => {
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [usedPeriod, setusedPeriod] = useState()
    const [usedDistance, setusedDistance] = useState()
    const [fuelType, setFuelType] = useState('')
    const [gearType, setGearType] = useState('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('')

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const token = localStorage.getItem('token')

        try {
            const res = await axios.post('api/cars', {
                make,
                model,
                usedPeriod,
                usedDistance,
                fuelType,
                gearType,
                location,
                price
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size='lg'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Car</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form style={{ textAlign: 'center' }} onSubmit={handleFormSubmit}>
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
