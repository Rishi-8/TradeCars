import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'

export const SearchResult = () => {

    const { query } = useParams()

  return (
    <Box py={5}>
        <Text>{query}</Text>
        <Flex direction='column' gap={4}>
            <Text>Hello</Text>
        </Flex>
    </Box>
  )
}
