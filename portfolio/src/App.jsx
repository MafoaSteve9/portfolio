import Navbar from './components/Navbar'
import Presentation from './components/Presentation'
import Projets from './components/Projets'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MesProjets from './pages/MesProjets'
import Parimis from './pages/Parimis'
import BoxyGenerator from './pages/BoxyGenerator'
import Porsche from './pages/Porsche'
import Trello from './pages/Trello'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Stack from './components/Stack'


function App() {
  return (
    <>

     <BrowserRouter>
     <Navbar />
     <Presentation />
     <Stack />
     <Projets />
     <MesProjets />

     <Routes>
     <Route path="/"/>
          
            <Route path="/pages/parimis" element={<Parimis />} />
            <Route path="/pages/boxygenerator" element={<BoxyGenerator />} />
            <Route path="/pages/porsche" element={<Porsche />} />
            <Route path="/pages/trello" element={<Trello />} />
         
     </Routes>

     </BrowserRouter>
     <Contact />
     <Footer />

    </>
  )
}

export default App