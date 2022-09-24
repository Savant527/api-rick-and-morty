import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarApp from './components/Navbar/index';
import Details from './pages/Characters/Details/Details';
import Characters from './pages/Characters'
import Episodes from './pages/Episodes'
import DetailsEpisodes from './pages/Episodes/DetailsEpisodes/Details';
import {Route, Routes} from 'react-router-dom';
import { FooterApp } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavbarApp/>
      <Routes>
      <Route path="/details/:id" element={<Details />} />
      <Route path="/detailsepisodes/:id" element={<DetailsEpisodes />} />
      <Route path="/" element={<Characters />} />
      <Route path="/episodes" element={<Episodes />} />
      </Routes>
      <FooterApp/>
    </div>
  );
}

export default App;
