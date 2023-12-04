import { createContext, useContext, useEffect, useState } from "react"
import axios from 'axios' 

const functionsContext = createContext();

export const useFunctionsContext = () => {
  return useContext(functionsContext);
}

export const EventsProvider = ({children}) => {
  
  const [orderBy,setOrderBy] = useState();
  const [page,setPage] = useState(0);
  const [date,setDate] = useState();
  // const [events,setEvents] = useState([])
  const [eventsByLeague,setEventsByLeague] = useState([])
  const [eventsByTime,setEventsByTime] = useState([])

  const [loading,setLoading] = useState(true)
  // const [eventsResponse,setEventResponse] = useState([]);

  const url = 'https://www.ole.com.ar/wg-agenda-deportiva/json/agenda.json';
  const url_corsproxy = 'https://corsproxy.io/?' + encodeURIComponent(url);

  useEffect(() => {
    const getData = async () => {
      if(loading){

        
        const response = await axios.get('/data.json')
        // const response = await axios.get(url_corsproxy)
        console.log(response.data)
        const responseByLeague = [];
        const responseByTime = [];
        setDate(response.data.fechas[0].fecha)
        for (const fecha of response.data.fechas) {
          
          const addTorneoByLeague = [];
          const addTorneoByTime = [];
          for (const torneo of fecha.torneos) {
            if(torneo.deporte.id == 1 && torneo.eventos.length >= 1){
              
              const partidosByLeague = [];
              for (const partido of torneo.eventos) {
                const date = Intl.DateTimeFormat('es-AR',{hour:'numeric',minute:'numeric'}).format(new Date(partido.fecha));
                const newPartido = {evento:partido.nombre,horario:date,canales:partido.canales}
                partidosByLeague.push(newPartido);

                addTorneoByTime.push(newPartido)
              }

              const eventoByLeague = {
                torneo: torneo.nombre,
                eventos: partidosByLeague
              }

              addTorneoByLeague.push(eventoByLeague)
            }
          }

          const pageByLeague = {
            fecha: fecha.fecha,
            eventos:addTorneoByLeague
          }

          responseByLeague.push(pageByLeague)
          
          addTorneoByTime.sort((a,b) => {
            if(a.horario < b.horario) {return -1}
            if(a.horario > b.horario) {return 1}
            return 0
          })

          const pageByTime = {
            fecha: fecha.fecha,
            eventos: addTorneoByTime
          }
          responseByTime.push(pageByTime)
        }
        console.log(responseByLeague)
        console.log(responseByTime)
        setEventsByLeague(responseByLeague);
        setEventsByTime(responseByTime)
        
        // setLoading(false)
      }
    }

    const order = localStorage.getItem('sort') || 'league'
    setOrderBy(order)

    // setEvents([1,2,3,4,5,6,7,8,9])

    getData();
  },[])

  useEffect(() => {
    orderBy && localStorage.setItem('sort',orderBy)
  },[orderBy])

  const pageUp = () => {
    // console.log(page)
    if(page < 3){
      setPage(page+1)
    }
    // console.log(page)
    
  }

  const pageDown = () => {
    // console.log(page)
    if(page > 0) {
      setPage(page-1)
    }
    // console.log(page)
  }

  const dataContext = {
    orderBy,setOrderBy,
    eventsByLeague,eventsByTime,
    page,setPage,
    pageUp,pageDown,
    date,
    loading
  };

  return(
    <functionsContext.Provider value={dataContext}>
      {children}
    </functionsContext.Provider>
  )
}
