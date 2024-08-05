import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'
import logo from './assets/2.png'
import Login from './components/Login';
import { Routes , Route } from 'react-router-dom';
import Signup from './components/Signup';
import Main from './components/Main';
import Movie from './components/Movie';
import Seating from './components/Seating';
import Success from './components/Success';
import { useEffect ,useState } from 'react';
import { Button } from 'bootstrap';

function App(){
   const [user , setUser] = useState('');
    useEffect(()=>{
    const userEmail = localStorage.getItem('userEmail')
    if(userEmail){
      setUser(userEmail)
    }
  },[user])
  return (
    <div>
      <Navbar className="bg-body-light">
        <Container>
          <Navbar.Brand href="#home" style={{display: 'flex'}}>
            <img
              alt=""
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{' '}
           <h2 style={{ marginTop:20 , fontSize:40 , fontWeight: 'bold' , fontFamily:'inherit'}}><i>Book My Show</i></h2> 
          </Navbar.Brand>
         {user && <button className='logout-btn'>Logout</button>}
        </Container>      
      </Navbar>

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/movie/:id' element={<Movie/>}/>
        <Route path='/seating' element={<Seating/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
 
    </div>
  )
}

export default App
