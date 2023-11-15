import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import { Route } from 'react-router-dom'
import { Home } from './components/Page/home'

import Navbar from './components/Page/Navbar'
import Footer from './components/Page/footer'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'
import {AppProvider } from './components/Context/Context'
import Indivitual from './components/indivitual/Indivitual'
import Test from './components/Context/test/Test'

// import React ,{lazy} from 'react'
// import Usecontxttrial from './components/Context/Usecontxttrial'


/******react lazy for lazy loading********************* */
// const Shop1 = lazy(()=>import('./components/Shop/Shop'))

function App() {


  return (
    <>
      <AppProvider>

      <Router>
      {/* <div className='fixed z-50 '> */}
      <Navbar/>
      {/* </div> */}
      
        <Routes>
          
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/:id' element={<Indivitual/>}/>

          <Route path='/trial' element={<Test/>}/>
          

        </Routes>

      </Router>
      <div className=''>

        {/* <Footer/> */}
      </div>

      </AppProvider>

    </>
  )
}

export default App
