import './css/style.css';
import Navigasi from './components/Navigasi';
import Home from './components/Home';
import AnakHome from './components/AnakHome';
import CardRumah2 from './components/CardRumah2';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailRumah from '../src/pages/DetailRumah';
import { RumahProvider } from './context/Rumah';
import SyaratKredit from './pages/SyaratKredit';
import WhatsApp from './components/WhatsApp';


const App = () => {
  // state mode gelap
  const [darkMode, setDarkMode] = useState(() => {
    const localData = localStorage.getItem('darkMode');
    return localData !== null ? JSON.parse(localData) : true;
  })

  // tombol untuk mengatasi mode gelap
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  // simpan mode gelap ke local storage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    // tambahkan class dark-mode jika darkMode bernilai true
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      {/* kirim props */}
      <RumahProvider>
        
          <Routes>
            <Route path="/" element={
              <>
              <Navigasi handleDarkMode={handleDarkMode} darkMode={darkMode} />
                <Home />
                <AnakHome />
                <Jumbotron />
                <CardRumah2 />
              </>
            } />
            <Route path="/detailrumah/:id" element={<DetailRumah />} />
            <Route path='/syarat' element={<SyaratKredit />} />
          </Routes>
          <WhatsApp />
          <Footer />
      
      </RumahProvider>
    
    
    </div>
  )
}

export default App
