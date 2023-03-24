import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Counter from './Components/Counter';
import Product from './Components/Product';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Todo from './Components/Todo';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='/counter' element={<Counter/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      
        

      </Routes>
    
    </div>
  );
}

export default App;
