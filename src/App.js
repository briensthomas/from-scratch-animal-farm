import './App.css';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import { animals } from './data.js';


function App() {
  return (
    <div className="App" >
      <Header name='Alchemy Code Farm'/>
      <Main animals={animals} />
      <Footer email='thomasbrien94@gmail.com'/>
    </div>
  );
}

export default App;
