import { Box, Container, Text } from "@chakra-ui/react"

const Footer = () => {
  return(
    <Box bg='#000000'>
      <Container display='flex' justifyContent='space-between'>
        <Text color='#CF7500'>
          Pablo Rito {(new Date()).getFullYear()}
        </Text>
      </Container>
    </Box>
  )
}

export { Footer }