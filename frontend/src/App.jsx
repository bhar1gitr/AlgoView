import Stack from "./Components/Stack/Stack"
import { ChakraProvider } from '@chakra-ui/react'
import LinearSearch from "./Pages/Searching/LinearSearch"
import BinarySearch from "./Pages/Searching/BinarySearch"
function App() {

  return (
  <>
    <ChakraProvider>
      <LinearSearch/>
      <BinarySearch/>
    {/* <Stack/> */}
    </ChakraProvider>
  </>
  )
}

export default App
