import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Counter from './Components/Counter';
import Product from './Components/Product';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Counter/>
      <Product/>
      <Profile/>
      <Todo/>
      <Home/>
    
    </div>
  );
}

export default App;
