import { ChakraProvider, Container } from '@chakra-ui/react'
import { Header } from './Components/Header'
import { Main } from './Components/Main'
import { Footer } from './Components/Footer'
import { EventsProvider } from './Providers/EventsProvider'
import theme from './Theme'


function App() {
  // console.log(theme)
  return (
    <ChakraProvider theme={theme}>
      <EventsProvider>
        <Header />
        <Main />
        {/* <Footer /> */}
      </EventsProvider>
    </ChakraProvider>
  )
}

export default App
