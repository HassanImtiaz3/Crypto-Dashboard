import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({

  colors: {
    p:{
      purple : '#5f00d9',
    }
  },
  fonts: {
    heading: "Ubuntu",
    body: "Ubuntu",
  },
  styles : {
    global:{
      body:{
        bg: '#f3f3f7'
      }
    }
  }
})

export default theme