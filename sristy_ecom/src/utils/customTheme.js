import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
  colors: {
    primary: {
        100:"F0E2F4",
        200:"e0c4e8",
      300: "#d8b4e2",
      400: "#bc96e6",
      500: "#ae759f",
      600: "#55286f",
      700: "#210b2c",
      
    },
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Open Sans, sans-serif",
  },
})

export default customTheme
