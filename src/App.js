import './App.css';
import Teams from './pages/teams';
import MainPage from './pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import EndingPage from './pages/EndingPage';

export const BASE_URL="https://npl-draft-backend.onrender.com";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/teams" element={<Teams />} />
          <Route path="/round" element={<MainPage />} />
          <Route path="/end" element={<EndingPage />} />
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

