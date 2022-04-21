
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Search from './component/Search/Search';
import Detail from './component/Detail/Detail';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Search />} />
      <Route path='/detail/:id' element={<Detail />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
