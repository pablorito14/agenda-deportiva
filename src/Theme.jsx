import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const shadows = {
  'tagShadow': '2px 2px 3px 0px rgba(0,0,0,0.5)',
  'customShadow': '5px 5px 5px 0px rgba(0,0,0,0.5)'
}

const Card = defineStyleConfig({
  baseStyle:{
    container:{
      boxShadow:'5px 5px 5px 0px rgba(0,0,0,0.5)',
      backgroundColor: '#DBDBDB',
      mb:4
    },
    header:{
      backgroundColor:'black',
      color:'#F0A500',
      borderTopRadius: 'md',
      px: 2,
      py: 1
    },
    body:{
      py: 1,
      px: 2
    }
  }
})

const Tag = defineStyleConfig({
  baseStyle:{
    container:{
      fontSize: 'small',
      bg:'#CF7500',
      color:'#DBDBDB',
      boxShadow: 'tagShadow',
      p: 1 
    }
  }
})

const theme = extendTheme({shadows,components:{Card,Tag}});

export default theme;