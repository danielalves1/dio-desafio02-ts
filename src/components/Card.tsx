import { Box, Center, Input } from "@chakra-ui/react"
import { Header } from "./Header/Header"
import { CustomButton } from "./CustomButton"
import { login } from "../services/login"


export const Card = () => {
  return(
    <Center>
        <Box
          sx={{
            minHeight: '100vh',
            backgroundColor: '#9413dc',
            width: '100vw',
            padding: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box backgroundColor='#FFFFFF' borderRadius='25px'
            sx={{
              maxWidth: 500,
              width: '100%',
              display: 'flex',
              gap: 5,
              flexDirection: 'column',
            }} padding='15px' >
            <Header />
            <Center>
              <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Center>
              <CustomButton onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                Acessar
              </CustomButton>
            </Center>
          </Box>
        </Box>
      </Center>
  )
}