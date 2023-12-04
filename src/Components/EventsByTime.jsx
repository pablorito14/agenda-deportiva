import { Box, Button, Card, CardBody, CardHeader, Container, Divider, Grid, GridItem, Heading, Tag, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FaAnglesLeft, FaAnglesRight, FaArrowDownShortWide, FaArrowDownWideShort, FaArrowRotateRight } from "react-icons/fa6"
import { motion } from "framer-motion"
import { useFunctionsContext } from "../Providers/EventsProvider"

const EventsByTime = () => {
  const {eventsByTime,page} = useFunctionsContext();
console.log(eventsByTime)
  return(
    <motion.div
          animate={{opacity: [0, 1],y: [300, 0]}}
          transition={{ type: "spring",damping: 30, duration:0.5, delay:1/8 }} 
    >
      <Card>
        
        <CardBody>
          {eventsByTime.length > 0 && eventsByTime[page].eventos.map((torneo,i) => (
            <motion.div
              key={i}
              animate={{opacity: [0, 1],y: [300, 0]}}
              transition={{ type: "spring",damping: 30, duration:0.5, delay:i/8 }} 
            >
              {<Grid templateColumns='repeat(12,1fr)' py={2} gap={2} alignItems='center'>
                <GridItem colSpan={1} fontWeight='bold'>{torneo.horario}</GridItem>
                <GridItem colSpan={{base: 10,md:8}}>
                  {torneo.evento}
                  <Text fontSize='small' color='#CF7500' mt={0} pt={0} lineHeight={1}>Copa de la Liga</Text>
                </GridItem>
                <GridItem colSpan={{base:12,md:3}} display='flex' flexWrap='wrap'
                gap={1} justifyContent={{base:'center',md:'end'}}>
                  
                  {torneo.canales.map((canal,i) => <Tag key={i}>{canal.nombre}</Tag>)}
                  
                </GridItem>
              </Grid>}
            </motion.div>
          ))}
        </CardBody>
      </Card>
    </motion.div>
  )
}

export { EventsByTime }