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
import Electronics from './Components/Electronics';
import Jewelery from './Components/Jewelery';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='/counter' element={<Counter/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      

      <Route path='/product' element={<Product/>}>
     <Route path='electronics' element={<Electronics/>}/>
     <Route path='jewelery' element={<Jewelery/>}/>

           
      </Route>
      
      
        

      </Routes>
    
    </div>
  );
}

export default App;
