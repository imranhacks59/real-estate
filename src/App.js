import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Router >
     <Header />
     
      <Routes>
          <Route path='/' element={<Home />} />
        
      </Routes>
      </Router>
     
     <Footer />
   
    </div>
  );
}

export default App;
