import { Box, Container, Heading, Spinner, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FaAnglesLeft, FaAnglesRight, FaArrowRotateRight } from "react-icons/fa6"
import { motion } from "framer-motion"
import { useFunctionsContext } from "../Providers/EventsProvider"
import moment from 'moment';

const PaginationBar = () => {

  const {page,setPage,pageUp,pageDown,date} = useFunctionsContext();
// console.log(page)
  const [dateShow,setDateShow] = useState();
  const [reloading,setReloading] = useState(false);
  
console.log(new Date(date))
// moment.locale('es')
// console.log(moment('date').format('YYYY-M-D'))
  const strDate = new Intl.DateTimeFormat('es-AR',{month:'short',day:'numeric',weekday:'long'}).format(new Date(moment(date).format('YYYY-M-D')))

  const reload = () => {
    console.log('recargar')
    setReloading(true)
    // alert('reload')
    setTimeout(() => {
      setReloading(false);
    }, 2000);
  }

  return(
    <Box bg='#000000' boxShadow='0px -2px 10px 2px rgba(0,0,0,0.5)' position='fixed' w='full' bottom='0'>
      <Container maxW='2xl' display='flex' px={1} py={2} justifyContent='space-between' alignItems='center'>
        <Box p={2} bg='#000-000' color='#CF7500' onClick={pageDown}> 
          <motion.div 
            whileTap={{scale:.9}}
            whileHover={{scale:1.1}}
            >

            <FaAnglesLeft size={30} />
          </motion.div>
        </Box>
        
        <Box color='#CF7500' display='flex' flexDirection='column' alignItems='center'>
          <Box display='flex' alignItems='center' gap={2} >
            <Heading size='lg' textTransform='uppercase'>
              {strDate} 
            </Heading>
            
            <Box onClick={reload}>
              {reloading ? <Spinner /> : <FaArrowRotateRight size={20} />}
              
            </Box>
          </Box>
          <Text fontSize='small'>By Pablo Rito {(new Date()).getFullYear()}</Text>
        </Box>

        <Box p={2} bg='#0-00000' color='#CF7500' onClick={pageUp}>
          <motion.div 
            whileTap={{scale:.9}}
            whileHover={{scale:1.1}}
            >

            <FaAnglesRight size={30} />
          </motion.div>
        </Box>
        </Container>
    </Box>
  )
}

export { PaginationBar }