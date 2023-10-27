import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

function Loader() {
  return (
    <Box display="flex" justifyContent="center" p={100}>
        <Spinner size="lg"/>
    </Box>
  )
}

export default Loader