import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import AllUser from './Components/AllUser';
import AddUser from './Components/AddUser';
import CodeforInterview from './Components/CodeforInterview';
import EditUser from './Components/EditUser';
import { Route,Routes } from 'react-router-dom';
// import AllRoutes from './Components/AllRoutes';

function App() {
  return (
       <div className="App">
       <Navbar/>
       {/* <AllRoutes/> */}
       <Routes>
     <Route path='/' element={<CodeforInterview/>}/>
     <Route path='/all' element={<AllUser/>}/>
     <Route path='/user' element={<AddUser/>}/>
     <Route path='/edit/:id' element={<EditUser/>}/>



    </Routes>

       
       {/* <AddUser/>
       <AllUser/>
       <CodeforInterview/> */}
     
       </div>
  )
}

export default App;
