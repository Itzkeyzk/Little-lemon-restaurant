
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './components/Home'; // Assuming Home is a default export
 import Nav from './Nav';
import {About} from './components/About';
import {Menu} from './Menu';
import {Reservation} from './Reservation';
import {OrderOnline} from './Orderonline';
import {Login} from './Login';
import Header from './Header';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <>
   <Header />
   
    <Nav />

   
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" component={<Menu />} />
        <Route path="/reservation" component={<Reservation />} />
        <Route path="/order-online" component={<OrderOnline />} />
        <Route path="/login" component={<Login/>} />
      </Routes>
      
      </>
  
  );
}

export default App;
