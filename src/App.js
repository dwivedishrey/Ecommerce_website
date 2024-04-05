import Header from './components/Header';
import Home from './components/Home';
import CardDetails from './components/cardDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router,Routes, Route } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CardDetails/>}/>
    </Routes>
    <Toaster />
    </>
  );
}

export default App;
