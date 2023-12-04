import { Box, Button, Card, CardBody, CardHeader, Container, Divider, Grid, GridItem, Heading, Tag, Text } from "@chakra-ui/react"
import { AnimatePresence,motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FaAnglesLeft, FaAnglesRight, FaArrowDownShortWide, FaArrowDownWideShort, FaArrowRotateRight } from "react-icons/fa6"
import { useFunctionsContext } from "../Providers/EventsProvider"
import axios from 'axios' 

const EventsByLeague = () => {
  const {eventsByLeague,page,loading} = useFunctionsContext();
  console.log(eventsByLeague)
  
// 

  return(
    <>


    {eventsByLeague.length > 0 && eventsByLeague[page].eventos.map((torneo,i) => (
      <motion.div
          key={i}
          animate={{opacity: [0, 1],y: [300, 0]}}
          transition={{ type: "spring",damping: 30, duration:0.5, delay:i/8 }} 
      >
        <Card>
          <CardHeader >
            <Text fontSize='lg'>{torneo.torneo}</Text>
          </CardHeader>
          <CardBody>
            {torneo.eventos.map((partido,i) => (
            <Grid key={i} templateColumns='repeat(12,1fr)' py={2} gap={2} alignItems='center'>
              <GridItem colSpan={1} fontWeight='bold'>{partido.horario}</GridItem>
              <GridItem colSpan={{base: 10,md:8}}>{partido.evento}</GridItem>
              <GridItem colSpan={{base:12,md:3}}  display='flex' flexWrap='wrap' 
                        gap={1} justifyContent={{base:'center',md:'end'}}>
                {partido.canales.map((canal,i) => (
                  <Tag key={i}>{canal.nombre}</Tag>
                ))}
              </GridItem>
            </Grid>
            ))}
            
          </CardBody>
        </Card>
      </motion.div>
    ))}
    </>
  )
}

export { EventsByLeague }