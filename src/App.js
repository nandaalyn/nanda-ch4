
import './App.css';
import Mainroute from './route/Mainroute';
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
    <Mainroute />
    <Footer />
    </>
  );
}

export default App;
