import Stack from "./Components/Stack/Stack"
import { ChakraProvider } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
function App() {

  return (
  <>
    <ChakraProvider>
      <Input placeholder='Basic usage' />
    
    {/* <Stack/> */}
    </ChakraProvider>
  </>
  )
}

export default App
