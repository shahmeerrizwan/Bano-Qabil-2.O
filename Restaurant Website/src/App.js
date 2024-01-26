import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Team from './components/Team';
import Menu from './components/Menu';
import Home from './components/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
     <div className="App">
     
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path ="/about" element={<About/>} />
          <Route path ="/services" element={<Services/>} />
          <Route path ="/menu" element={<Menu/>} />
          <Route path ="/team" element={<Team />} />
          <Route path ="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>  
     </BrowserRouter>
   
  );
}
export default App;