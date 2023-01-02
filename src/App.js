import logo from './logo.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Topnav from './Components/Topnav'
import Headlines from './Components/Headlines'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Newss from './Pages/Newss'
import Contact from './Components/Contact'
import Travelcategory from './Components/Travelcategory'
import Travelcategory2 from './Components/Travelcategory2'
import Search from './Components/Search'
import Search2 from './Components/Search2'

function App() {
  return (
    <>
      <BrowserRouter>
        <Topnav />
        <Headlines />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="what/" element={<Newss/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/travel" element={  <Travelcategory/>} />
          <Route path="/travel2" element={  <Travelcategory2/>} />
          <Route path="/search" element={  <Search/>} />
          <Route path="/search2" element={  <Search2/>} />

       </Routes>
        <Footer/>
        
      </BrowserRouter>
    </>
  )
}

export default App
