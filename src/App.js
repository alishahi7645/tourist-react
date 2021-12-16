import './App.css';
import {BrowserRouter as Router , Route , Switch , Routes} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Homepage from './components/pages/homepage';
import Footer from './components/Footer/Footer';
import Tourism from './components/pages/Tourism';
import Tour from './components/pages/Tour';
import SignUp from './components/pages/Signup';
import ScrollToTop from './components/scrooltotop/scrool';
function App() {
  
  return (
    <>
      <Router basename="/travel/">
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/tourism" element={<Tourism/>}/>
          <Route path="/tour" element={<Tour/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes> 
        <Footer/>
      </Router>
    </>
  );
}

export default App;
