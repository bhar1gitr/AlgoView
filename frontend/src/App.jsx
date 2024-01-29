import Stack from "./Components/Stack/Stack"
import { ChakraProvider } from '@chakra-ui/react'
import LinearSearch from "./Pages/Searching/LinearSearch"
function App() {

  return (
  <>
    <ChakraProvider>
      <LinearSearch/>
    {/* <Stack/> */}
    </ChakraProvider>
  </>
  )
}

export default App
