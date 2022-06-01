
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import Search from './component/Search/Search';
import Detail from './component/Detail/Detail';
import Home from './component/Home/Home';
import ListCar from './component/ListCar/ListCar';
import Invoice from './component/Invoice/Invoice';
import Addcar from './component/Addcar/Addcar';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Search />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/dashboard' element={<Home />} />
      <Route path='/listcar' element={<ListCar />} />
      <Route path='/invoice' element={<Invoice />} />
      <Route path='/add_car' element={<Addcar />} />
    </Routes>

    </>
  );
}

export default App;
