import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarApp from './components/Navbar/index';
import Details from './pages/Details/Details';
import Characters from './pages/Characters'
import {Route, Routes} from 'react-router-dom';
import { FooterApp } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavbarApp/>
      <Routes>
      <Route path="/details/:id" element={<Details />} />
      <Route path="/" element={<Characters />} />
      </Routes>
      <FooterApp/>
    </div>
  );
}

export default App;
