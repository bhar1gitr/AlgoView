import Stack from "./Components/Stack/Stack"
import { ChakraProvider } from '@chakra-ui/react'
import LinearSearch from "./Pages/Searching/LinearSearch"
import BinarySearch from "./Pages/Searching/BinarySearch"
import BubbleSort from "./Pages/Searching/BubbleSort"
import HomePage from "./Pages/Home/HomePage"

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Select from "./Components/Select"

function App() {

  return (
  <>
    <ChakraProvider>
      {/* <LinearSearch/>
      <BinarySearch/>
      <BubbleSort/> */}
    {/* <Stack/> */}
    <Navbar/>
    <Select/>

    <Router>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
        <Route path='/linear-search' element={<LinearSearch/>}/>
        <Route path='/login' element={<BinarySearch/>} />
      </Routes>
   </Router>
    </ChakraProvider>
  </>
  )
}

export default App
