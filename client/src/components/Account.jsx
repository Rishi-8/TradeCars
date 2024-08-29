import { Avatar, Button, Card, FormControl, FormLabel, Image, Input, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import apiClient from '../apiClient'

export const Account = () => {
  const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState()
  const [isEdit, setIsEdit] = useState(false)

  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchAccount = async () => {
      await apiClient.get("api/users/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
        .then((res) => {
          console.log(res.data)
          setAccount(res.data)
          setLoading(false)
        })
        .catch((error) => {
          console.log(error)
          setLoading(false)
        })
    }
    fetchAccount()
  }, [isEdit])

  const updateAccount = async(e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value

    await apiClient.put("api/users/profile", {
      name,
      email
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  ).then((res) => {
    console.log(res)
    setIsEdit(false)
  }).catch((error) => {
    console.log(error)
  })
  }

  if (loading) {
    return <Text>...Loading</Text>
  }

  return (
    <>
      <Text fontSize='2xl' fontWeight='700' mb={4}>Account</Text>
      <Stack as={Card} align='center' justifyContent='start' p='50px' gap='0'>
        <Avatar name={account.name} />
        {!isEdit ?
          <>
            <Text fontSize='2xl' fontWeight='700'>{account.name}</Text>
            <Text fontSize='lg'>{account.email}</Text>
            <Button mt={5} colorScheme='blue' size='sm' onClick={() => setIsEdit(true)}>Edit</Button>
          </> :
          <form style={{ textAlign: 'center', width: '100%' }} onSubmit={updateAccount}>
            <FormControl p={4}>
              <FormLabel>Name: </FormLabel>
              <Input type='text' defaultValue={account.name} name='name'/>
            </FormControl>
            <FormControl p={4}>
              <FormLabel>Email: </FormLabel>
              <Input type='text' name='email' defaultValue={account.email} />
            </FormControl>
            <Button colorScheme='blue' type='submit'>Save</Button>
          </form>
        }
      </Stack>
    </>
  )
}
