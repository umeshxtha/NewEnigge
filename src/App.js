
import './App.css';
import Homepage from '../src/Pages/Homepage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import PortfolioPage from './Pages/PortfolioPage';
import ResumePage from './Pages/ResumePage';
import ServicesPage from './Pages/ServicesPage';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <>     
   <Routes>
     <Route path='/' element={<Homepage/>}/>
     <Route path='about' element={<AboutPage/>}/>
     <Route path='Resume' element={<ResumePage/>}/>
     <Route path='Services' element={<ServicesPage/>}/>
     <Route path='Portfolio' element={<PortfolioPage/>}/>
     <Route path='Contact' element={<ContactPage/>}/>
   </Routes>
    </>
    </div>
  );
}

export default App;
