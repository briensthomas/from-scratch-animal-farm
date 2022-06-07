import logo from './logo.svg';
import './App.css';

import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

import { animals } from './Animal/data.js';

import backgroundImage from './background.png';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header />
      <Main animals={animals} />
      <Footer />
    </div>
  );
}

export default App;
