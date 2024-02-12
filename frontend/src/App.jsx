import Stack from "./Components/Stack/Stack"
import { ChakraProvider } from '@chakra-ui/react'
import LinearSearch from "./Pages/Searching/LinearSearch"
import BinarySearch from "./Pages/Searching/BinarySearch"
import BubbleSort from "./Pages/Sorting/BubbleSort"
import HomePage from "./Pages/Home/HomePage"
import Select from "./Components/Select"
import InsertionSort from "./Pages/Sorting/InsertionSort"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import FlipCards from "./cards/TimeComplexity"
import FlipCardsSpaceComplexity from "./cards/SpaceComplexity"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TreeTraversal from "./Pages/Tree/Traversal"

function App() {

  return (
    <>
      <Router>
        <ChakraProvider>
          <Navbar />
          <Select />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/linear-search' element={<LinearSearch />} />
            <Route path='/binary-search' element={<BinarySearch />} />
            <Route path='/bubble-sort' element={<BubbleSort />} />
            <Route path='/insertion-sort' element={<InsertionSort />} />
            <Route path="t" element={<TreeTraversal></TreeTraversal>}/>
            <Route path='/insertion-sort' element={<InsertionSort />} />
            
            <Route path='/time-comp' element={<FlipCards/>} />
            <Route path='/space-comp' element={<FlipCardsSpaceComplexity/>} />
          </Routes>
          <Footer/>
        </ChakraProvider>
      </Router>
    </>
  )
}

export default App
