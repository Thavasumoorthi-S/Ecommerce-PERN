import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';
import Home from './component/Home';
import Cart from './component/Cart';
import Userscontext from './Userscontext';
import { useState } from 'react';


function App() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cart,setcart]=useState([])

  return (
    <Userscontext.Provider value={{name,email,password,setname,setemail,setpassword,cart,setcart}}>
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Register}/>
        <Route exact path='/login' Component={Login}/>
        <Route exact path='/home' Component={Home}/>
        <Route exact path='/cart' Component={Cart}/>
      </Routes>
      </BrowserRouter>
      </div>
      </Userscontext.Provider>

  );
}

export default App;
