import "./App.css";
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  return (
    <div className='App'>
      <div>
        <nav className="flex mx-auto w-full justify-center gap-8">
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <LanguageSwitcher/>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App;
