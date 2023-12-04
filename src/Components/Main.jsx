import { Box, Button, Card, CardBody, CardHeader, Container, Divider, Grid, GridItem, Heading, Tag, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FaAnglesLeft, FaAnglesRight, FaArrowDownShortWide, FaArrowDownWideShort, FaArrowRotateRight } from "react-icons/fa6"
import axios from 'axios' 
import { OrderButtons } from "./OrderButtons"
import { PaginationBar } from "./PaginationBar"
import { EventsList } from "./EventsList"
import { EventsByLeague } from "./EventsByLeague"
import { EventsByTime } from "./EventsByTime"
import { useFunctionsContext } from "../Providers/EventsProvider"

const Main = () => {

  const {orderBy,loading} = useFunctionsContext();
// console.log(orderBy)
  return(
    <Box>
      <Container display='flex' px={3} 
                flexDir='column' maxW='2xl' pb={20}>
        
        {/* BOTONES DE ORDENAMIENTO       */}
        <OrderButtons />
        {/* BOTONES DE ORDENAMIENTO */}

        {/* LISTADO DE EVENTOS ORDENADOS POR LIGA */}
        {orderBy === 'league' && <EventsByLeague />}
        {/* LISTADO DE EVENTOS ORDENADOS POR LIGA */}

        {/* LISTADO DE EVENTOS ORDENADOS POR HORARIO */}
        {orderBy === 'time' && <EventsByTime />}
        {/* LISTADO DE EVENTOS ORDENADOS POR HORARIO */}

      </Container>
        {/* PAGINACION Y FECHA */}
        {!loading && <PaginationBar />}
        {/* PAGINACION Y FECHA */}

    
    </Box>
    
  )
}

export { Main }