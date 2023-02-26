import './App.css';
import Login from './components/login';
import {BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Offer from './components/offer';
function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Login/>} />
         <Route path='/offer' element={<Offer/>} />

        </Routes>
    
      </BrowserRouter>
   </>
  );
}

export default App;
