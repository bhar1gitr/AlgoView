import Stack from "./Components/Stack/Stack"
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './Components/Navbar';
function App() {

  return (
  <>
    <ChakraProvider>
    <Navbar/>
    {/* <Stack/> */}
    </ChakraProvider>
  </>
  )
}

export default App
