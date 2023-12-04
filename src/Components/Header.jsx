import { Box, Button, Container, Heading, Link } from "@chakra-ui/react"

const Header = () => {
  
  return(
    
    <Box as="header" bg='#000000' boxShadow='0px 2px 10px 2px rgba(0,0,0,0.5)'>
      <Container display='flex' justifyContent='center' alignItems='center' >
        <Heading color='#CF7500' textTransform='uppercase'>
          Agenda Futbolera
        </Heading>
      </Container>
    </Box>
  )
}

export { Header }