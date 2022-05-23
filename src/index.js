import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Infos from './pages/Infos'
import Logement from './pages/Logement'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import GlobalStyle from './utils/style/GlobalStyle'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
        <Routes>
          <Route exact path ="/" element={<Home />} />
          <Route path="/Infos" element={<Infos />} />
          <Route path="/Logement/:appartId" element={<Logement />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
    </Router>
  </React.StrictMode>
);