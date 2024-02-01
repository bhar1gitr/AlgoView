import Stack from "./Components/Stack/Stack"
import { ChakraProvider } from '@chakra-ui/react'
import LinearSearch from "./Pages/Searching/LinearSearch"
import BinarySearch from "./Pages/Searching/BinarySearch"
import BubbleSort from "./Pages/Searching/BubbleSort"
function App() {

  return (
  <>
    <ChakraProvider>
      <LinearSearch/>
      <BinarySearch/>
      <BubbleSort/>
    {/* <Stack/> */}
    </ChakraProvider>
  </>
  )
}

export default App
