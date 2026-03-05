import { Box, Flex, Heading } from "@chakra-ui/react"
import './Header.css'

export const Header  = () => {
  return(
    <Box className='header'>
      <Flex 
        align="center" 
        justify="center" 
        direction="column" 
        gap="2"
        py="8"
      >
        <Box className='logo-icon'>💳</Box>
        <Heading 
          as="h1" 
          size="2xl" 
          className='header-title'
          letterSpacing="1px"
        >
          Dio Bank
        </Heading>
        <Box className='header-subtitle'>
          Seu banco digital de confiança
        </Box>
      </Flex>
    </Box>
  )
}
