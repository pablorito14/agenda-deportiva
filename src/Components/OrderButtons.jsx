import { Box, Button } from "@chakra-ui/react"
import { FaArrowDownShortWide, FaArrowDownWideShort } from "react-icons/fa6"
import { useFunctionsContext } from "../Providers/EventsProvider"

const OrderButtons = () => {
  const {setOrderBy} = useFunctionsContext();

  const handleOrderByLeague = () => {
    setOrderBy('league')
  }

  const handleOrderByTime = () => {
    setOrderBy('time')
  }

  return(
    <Box display='flex' justifyContent='space-between' py={4} gap={4}>
        <Button w='full' boxShadow='customShadow' onClick={handleOrderByLeague} leftIcon={<FaArrowDownShortWide />}>
          Mostrar por liga
        </Button>
        <Button w='full' boxShadow='customShadow' onClick={handleOrderByTime} rightIcon={<FaArrowDownWideShort />}>
          Mostrar por horario
        </Button>
      </Box>
  )
}

export { OrderButtons }