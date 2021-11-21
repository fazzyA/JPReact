import logo from './logo.svg';
import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import {Routers}  from './components/Router';

function App() {
  return (
    <div>
      <Routers />
    </div>
  );
}

export default App;
