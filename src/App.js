import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home'; // Assuming Home is a default export
import Nav from './Nav';
import { About } from './components/About';
import { Menu } from './Menu';
import { Reservation } from './Reservation';
import { OrderOnline } from './Orderonline';
import { Login } from './Login';
import Header from './Header';
import BookingForm from './components/BookingForm';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<BookingForm />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
