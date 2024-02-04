import Stack from "./Components/Stack/Stack"
import { ChakraProvider } from '@chakra-ui/react'
import LinearSearch from "./Pages/Searching/LinearSearch"
import BinarySearch from "./Pages/Searching/BinarySearch"
import BubbleSort from "./Pages/Searching/BubbleSort"
import HomePage from "./Pages/Home/HomePage"
import Select from "./Components/Select"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"

function App() {

  return (
    <>
      <Router>
        <ChakraProvider>
          {/* <Stack/> */}
          <Navbar />
          <Select />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/linear-search' element={<LinearSearch />} />
            <Route path='/binary-search' element={<BinarySearch />} />
            <Route path='/bubble-sort' element={<BubbleSort />} />
          </Routes>
        </ChakraProvider>
      </Router>
    </>
  )
}

export default App
